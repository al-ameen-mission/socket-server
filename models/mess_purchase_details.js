const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_purchase_details', {
    mess_purchase_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mess_purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mess_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rate: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    primery_verification_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    final_verification_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primery_verification_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    final_verification_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_submit: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'mess_purchase_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mess_purchase_details_id" },
        ]
      },
    ]
  });
};
