const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photogallery', {
    photoGalleryId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    galleryCatagoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
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
    status: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'photogallery',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "photoGalleryId" },
        ]
      },
      {
        name: "photoGalleryId",
        using: "BTREE",
        fields: [
          { name: "photoGalleryId" },
        ]
      },
      {
        name: "galleryCatagoryId",
        using: "BTREE",
        fields: [
          { name: "galleryCatagoryId" },
        ]
      },
    ]
  });
};
