const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('online_form', {
    online_form_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    otpPass: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    applicaton_date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_class_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    last_class_session: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marks_percent: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    last_institute_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_institute_address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    discountTypeAdmission: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    discountValueAdmission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountTypeMonthly: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    discountValueMonthly: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donation_installment: {
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
    }
  }, {
    sequelize,
    tableName: 'online_form',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "online_form_id" },
        ]
      },
    ]
  });
};
