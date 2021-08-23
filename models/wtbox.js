const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wtbox', {
    wtboxId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    accessKey: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    langId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    css: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    container: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    htmlTemplate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tinymce: {
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
    active: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    system: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wtbox',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wtboxId" },
        ]
      },
    ]
  });
};
