const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_template', {
    global_template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    template_page: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    template_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    style_override: {
      type: DataTypes.STRING(9999),
      allowNull: false
    },
    backgroundImage: {
      type: DataTypes.STRING(250),
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
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'global_template',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "global_template_id" },
        ]
      },
    ]
  });
};
