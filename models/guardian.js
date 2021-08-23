const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guardian', {
    guardianId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    joinDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    permanentAddress: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recentAddress: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otpPass: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    relation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    studentName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
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
    tableName: 'guardian',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guardianId" },
        ]
      },
    ]
  });
};
