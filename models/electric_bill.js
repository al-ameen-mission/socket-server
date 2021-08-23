const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('electric_bill', {
    electric_bill_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branch_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    consumer_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    period_from: {
      type: DataTypes.DATE,
      allowNull: false
    },
    period_to: {
      type: DataTypes.DATE,
      allowNull: false
    },
    previous_unit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_unit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_consumed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    bill_no: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bill_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_mode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    payment_details: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    invoice_no: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    meter_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    current_month_amount: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    payble_through_rtgs: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    addedBy: {
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
    }
  }, {
    sequelize,
    tableName: 'electric_bill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "electric_bill_id" },
        ]
      },
    ]
  });
};
