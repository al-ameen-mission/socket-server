const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_purchase_details', {
    book_purchase_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cgst: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sgst: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    igst: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'book_purchase_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_purchase_details_id" },
        ]
      },
    ]
  });
};
