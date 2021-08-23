const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salary', {
    salaryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    actualGross: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    noOf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noOfAmt: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    hra: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    ca: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    spl: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    pfPercent: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    pfAmt: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    esicPercent: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    esicAmt: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    pTax: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    net: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    ctc: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    base: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    other: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deduction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payble: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paidAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dueAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paidDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    paidBy: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remarks: {
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
    }
  }, {
    sequelize,
    tableName: 'salary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "salaryId" },
        ]
      },
    ]
  });
};
