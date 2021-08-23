const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_purchase', {
    book_purchase_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bill_no: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    book_vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_amount: {
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
    total_amount: {
      type: DataTypes.INTEGER,
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
    tableName: 'book_purchase',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_purchase_id" },
        ]
      },
    ]
  });
};
