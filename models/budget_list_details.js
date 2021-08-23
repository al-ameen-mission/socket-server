const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budget_list_details', {
    budget_list_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    budget_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_head_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_head_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tax_percent: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    rate_excl_tax: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    rate_incl_tax: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_excl_tax: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_incl_tax: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    tax_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
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
    tableName: 'budget_list_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "budget_list_details_id" },
        ]
      },
    ]
  });
};
