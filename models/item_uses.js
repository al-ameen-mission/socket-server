const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_uses', {
    item_use_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reff_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    order_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primary_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    primary_verified_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    primary_verified_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    final_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    final_verified_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    final_verified_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'item_uses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_use_id" },
        ]
      },
    ]
  });
};
