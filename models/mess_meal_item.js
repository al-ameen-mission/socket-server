const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_meal_item', {
    mess_meal_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    morning: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    at_ten: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noon: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    evening: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    night: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
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
    tableName: 'mess_meal_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mess_meal_item_id" },
        ]
      },
    ]
  });
};
