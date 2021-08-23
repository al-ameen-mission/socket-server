const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resultentry_access', {
    resultentry_access_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    roll_from: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roll_to: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_from_valid: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_to_valid: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    for_class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    branch_code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'resultentry_access',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resultentry_access_id" },
        ]
      },
    ]
  });
};
