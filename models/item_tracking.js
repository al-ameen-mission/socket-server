const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_tracking', {
    item_tracking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_entry_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_uses_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    rate: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    product_uids: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item_tracking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_tracking_id" },
        ]
      },
    ]
  });
};
