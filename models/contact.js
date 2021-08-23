const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact', {
    contact_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(999),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
};
