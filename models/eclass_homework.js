const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eclass_homework', {
    eclass_homework_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eclass_doc_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eclass_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'eclass_homework',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eclass_homework_id" },
        ]
      },
    ]
  });
};
