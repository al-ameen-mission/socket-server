const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    newsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    briefDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fullDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redirecttUrl: {
      type: DataTypes.STRING(260),
      allowNull: false
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    newsImage: {
      type: DataTypes.STRING(260),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    seoUrl: {
      type: DataTypes.STRING(260),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    newsType: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    newsDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fromTime: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    toTime: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isPublished: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING(100),
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
    eventsType: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'news',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "newsId" },
        ]
      },
    ]
  });
};
