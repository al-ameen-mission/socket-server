const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smshistory', {
    smshistoryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mobileno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    rbcontactId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    msgtemplateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rbsbillId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    msgDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    msgStatus: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'smshistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "smshistoryId" },
        ]
      },
    ]
  });
};
