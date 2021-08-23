const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_entries', {
    item_entry_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reff_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    primary_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    primary_verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    primary_verified_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    final_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    final_verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    final_verified_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_entries',
        key: 'item_entry_id'
      }
    }
  }, {
    sequelize,
    tableName: 'item_entries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_entry_id" },
        ]
      },
      {
        name: "parent",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
    ]
  });
};
