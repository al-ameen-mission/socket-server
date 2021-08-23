const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher', {
    teacherId: {
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
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otpPass: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    specialization: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    subject_list: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    driving_license: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idcard_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    provider_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rfid: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
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
    tableName: 'teacher',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacherId" },
        ]
      },
    ]
  });
};
