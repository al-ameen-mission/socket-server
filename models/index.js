const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(module.filename);


const DB_HOST       = process.env.DB_HOST;
const DB_DIALECT    = process.env.DB_DIALECT;
const DB_USER       = process.env.DB_USER;
const DB_PASS       = process.env.DB_PASS;
const DB_NAME       =  process.env.DB_NAME;
console.log(DB_HOST, DB_DIALECT, DB_USER, DB_PASS, DB_NAME);

let db = {};
const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_DIALECT,
    });


fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {
    let model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate)
        db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;


