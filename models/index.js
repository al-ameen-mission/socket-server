const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);

let db = {};
const sequelize = new Sequelize({
    "host": process.env.DB_HOST || "",
    "dialect": process.env.DB_DIALECT || "",
    "username": process.env.DB_USER || "",
    "password": process.env.DB_PASS || "",
    "database": process.env.DB_NAME || ""
});


fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {
    let model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);// sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate)
        db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
