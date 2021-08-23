const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_access_class', {
    admin_access_class_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    access_key: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin_access_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_access_class_id" },
        ]
      },
    ]
  });
};
