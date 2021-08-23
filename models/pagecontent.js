const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagecontent', {
    pagecontentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    metaTag: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    metaDescription: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    editedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    parentPage: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    preInclude: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postInclude: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    seoId: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    externalLink: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    heading: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    onHead: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    onBottom: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    openNewTab: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    showImage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    langId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pageCss: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    metaTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isHome: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    login_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    template: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pagecontent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pagecontentId" },
        ]
      },
    ]
  });
};
