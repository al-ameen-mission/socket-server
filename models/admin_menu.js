const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_menu', {
    admin_menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    access_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    icon_small_class: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_small_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_big_class: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_big_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parent_admin_menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    view_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    only_super_admin: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    primary_verification: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    final_verification: {
      type: DataTypes.STRING(5),
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
    },
    second_level_access: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    global_accesses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    class_required: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gender_required: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_menu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_menu_id" },
        ]
      },
    ]
  });
};
