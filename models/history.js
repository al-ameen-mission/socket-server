const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    historyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admissionType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    registrationNo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    board: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    stream: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admission_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admission_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roll_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    full_marks: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    obtain_marks: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pass_fail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    historyStatus: {
      type: DataTypes.STRING(20),
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
    totalFees: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    monthlyFees: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    admissionFees: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    donationFees: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    registrationFees: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    registrationFeesStatus: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    formNo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    outGoingTcNo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    outGoingTcDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    inactiveDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    student_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vehicle: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    vehicle_type_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    vehicle_distance_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    vehicle_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discountTypeAdmission: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    discountValueAdmission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountTypeMonthly: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    discountValueMonthly: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    donation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donation_installment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    building_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    floor_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    room_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bed_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hostel_room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    elective_subject_ids: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "historyId" },
        ]
      },
      {
        name: "registrationNo",
        using: "BTREE",
        fields: [
          { name: "registrationNo" },
        ]
      },
      {
        name: "studentId",
        using: "BTREE",
        fields: [
          { name: "studentId" },
        ]
      },
      {
        name: "branch_code",
        using: "BTREE",
        fields: [
          { name: "branch_code" },
        ]
      },
    ]
  });
};
