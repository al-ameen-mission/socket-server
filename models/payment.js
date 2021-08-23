const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    paymentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paidRegistrationFees: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    dueRegistrationFees: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    paid_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    paymentMode: {
      type: DataTypes.STRING(30),
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
    tableName: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paymentId" },
        ]
      },
    ]
  });
};
