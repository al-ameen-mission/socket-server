const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('travel_driver', {
    travel_driver_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    driving_license: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idcard_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    provider_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    provider_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(30),
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
    tableName: 'travel_driver',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "travel_driver_id" },
        ]
      },
    ]
  });
};
