const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expense', {
    expenseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    expenseHead: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expenseDetails: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    expenceTo: {
      type: DataTypes.STRING(40),
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
    tableName: 'expense',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "expenseId" },
        ]
      },
    ]
  });
};
