const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_unique', {
    item_unique_id: {
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
      allowNull: false,
      references: {
        model: 'item_entry_details',
        key: 'item_entry_detail_id'
      }
    },
    is_ready: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "No",
      comment: "Yes,No"
    },
    campus_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "BOOK"
    },
    rack_no: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "BOOK"
    },
    shelf_no: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "BOOK"
    },
    library_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "BOOK"
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
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
    tableName: 'item_unique',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_unique_id" },
        ]
      },
      {
        name: "item_entry_detail_id",
        using: "BTREE",
        fields: [
          { name: "item_entry_detail_id" },
        ]
      },
    ]
  });
};
