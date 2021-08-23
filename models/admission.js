const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admission', {
    admissionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    },
    father_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mother_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    guardian_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vill: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    po: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ps: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dist: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    block: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    caste: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adhar_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    board: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    accNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    accHolderName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ifscCode: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobile_student: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    studentRemarks: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    apl_bpl: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    admissionType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    varificationStatus: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admissionId" },
        ]
      },
    ]
  });
};
