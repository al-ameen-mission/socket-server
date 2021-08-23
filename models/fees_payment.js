const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fees_payment', {
    fees_payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accademicsessionId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paybleAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    paidDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paidAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    paidBy: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    paymentethod: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    paymentNote: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fees_student_Ids: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    receipt_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fees_months: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    prevDueAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    currentDueAmount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'fees_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fees_payment_id" },
        ]
      },
    ]
  });
};
