const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_entry_details', {
    item_entry_detail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_entry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_entries',
        key: 'item_entry_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true,
      defaultValue: 0.00
    },
    quantity: {
      type: DataTypes.FLOAT(8,2),
      allowNull: true,
      defaultValue: 0.00
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_uids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    for_items: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item_entry_details',
        key: 'item_entry_detail_id'
      }
    },
    field_1: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Library - Edition "
    },
    field_2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    field_3: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item_entry_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_entry_detail_id" },
        ]
      },
      {
        name: "item_entry_id",
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
