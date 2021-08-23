const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_access', {
    admin_access_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    access_key: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secondary_access: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_access',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_access_id" },
        ]
      },
    ]
  });
};
