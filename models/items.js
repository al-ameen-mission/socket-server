const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    beng_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hindi_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    item_unit: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    item_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    stock_alert_quntity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    show_in_daily_report: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    departments: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    recoverable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    item_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    barcode_applicable: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "BOOK"
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "BOOK"
    },
    publisher: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "BOOK"
    },
    edition: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "BOOK"
    },
    no_of_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "BOOK"
    }
  }, {
    sequelize,
    tableName: 'items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
