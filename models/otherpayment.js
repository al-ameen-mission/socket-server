const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('otherpayment', {
    otherpaymentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paid_to: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    paid_amt: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payment_note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_mode: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    payment_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_ref_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
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
    tableName: 'otherpayment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "otherpaymentId" },
        ]
      },
    ]
  });
};
