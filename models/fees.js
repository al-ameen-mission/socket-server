const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fees', {
    feesId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATE,
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
    feesDueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fees_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fees_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payble: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paid_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paid_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paid_details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    subjects: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
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
    },
    fineAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medicineAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addEditCounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receivedAmt: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    refundAmt: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    paymentTime: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feesId" },
        ]
      },
    ]
  });
};
