const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otp', {
    otpId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mobileNo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    otpCode: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    validFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    validTo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reffNo: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'otp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "otpId" },
        ]
      },
    ]
  });
};
