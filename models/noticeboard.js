const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticeboard', {
    noticeboardId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
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
    marquee: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    statusNew: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    publisherName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    publisherDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'noticeboard',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "noticeboardId" },
        ]
      },
    ]
  });
};
