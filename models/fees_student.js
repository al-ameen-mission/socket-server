const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fees_student', {
    fees_student_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feesType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    accademicsessionId: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feesdata: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    vehicle: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    fine: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    discountType: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    discountValue: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    discountAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prevDueAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    totalPayble: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    paymentStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    currentDueAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    receipt_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fees_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fees_student',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fees_student_id" },
        ]
      },
    ]
  });
};
