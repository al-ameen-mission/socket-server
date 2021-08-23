const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_access_branch', {
    admin_access_branch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    access_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branch_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secondary_accesses: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_access_branch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_access_branch_id" },
        ]
      },
    ]
  });
};
