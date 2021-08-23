const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_unique_meta', {
    item_unique_meta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_unique_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_unique_meta_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_unique_meta_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item_unique_meta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_unique_meta_id" },
        ]
      },
    ]
  });
};
