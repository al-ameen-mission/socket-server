const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cronsms', {
    cronsmsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    totalPendingAmt: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    totalPendingMonth: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    sendingMonth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sendingYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smsText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobileNos: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
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
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cronsms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cronsmsId" },
        ]
      },
    ]
  });
};
