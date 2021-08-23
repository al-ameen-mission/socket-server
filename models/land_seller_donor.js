const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_seller_donor', {
    land_seller_donor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    land_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    po: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ps: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dist: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_seller_donor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "land_seller_donor_id" },
        ]
      },
    ]
  });
};
