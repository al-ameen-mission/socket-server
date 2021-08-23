const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_entry_to_account_head', {
    item_entry_to_account_head_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_entry_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_head_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item_entry_to_account_head',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_entry_to_account_head_id" },
        ]
      },
    ]
  });
};
