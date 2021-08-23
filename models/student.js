const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    studentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rfid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    registerDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    registerNo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    caste: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subcast: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apl_bpl: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    card_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    minority: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kanyashree: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    yuvashree: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    adhar_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adhar_dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    adhar_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ph: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ph_percent: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    disable: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    disable_percent: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    father_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    father_ocu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    father_adhar: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mother_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mother_ocu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mother_adhar: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vill: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    po: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ps: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dist: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    block: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    guardian_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    guardian_relation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    guardian_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    guardian_ocu: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    anual_income: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobile_student: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobile_guardian: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobile_emergency: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_student: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_guardian: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mother_tongue: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eye_power: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    psychiatric_report: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    religian: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    other_religian: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_school: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_class: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tc_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tc_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    studentRemarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    feesPayment: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    board: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    accNo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    accHolderName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ifscCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otpPass: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    current_asession: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_active: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    },
    mobile_student_alternet: {
      type: DataTypes.STRING(22),
      allowNull: false
    },
    mobile_student_whatsapp: {
      type: DataTypes.STRING(22),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "studentId" },
        ]
      },
      {
        name: "registerNo",
        using: "BTREE",
        fields: [
          { name: "registerNo" },
        ]
      },
      {
        name: "otpPass",
        using: "BTREE",
        fields: [
          { name: "otpPass" },
        ]
      },
      {
        name: "branch",
        using: "BTREE",
        fields: [
          { name: "branch" },
        ]
      },
    ]
  });
};
