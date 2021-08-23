const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    adminId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adminType: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mobileNo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.STRING(10),
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
    access: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    editDeletePassword: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    otp: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    joinDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    driving_license: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idcard_details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provider_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provider_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    provider_details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    residential: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    employee_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    id_card: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    id_card_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    caste: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    vill_street: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    po: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ps: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    block: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    under_payroll: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    verification_access: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    signature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    second_level_access: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    global_accesses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rfid: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "adminId" },
        ]
      },
    ]
  });
};
