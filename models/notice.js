const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notice', {
    noticeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file1_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file2_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file3: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file3_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file4: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    file4_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    viewOrder: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    statusNew: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mrque: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    statusActive: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "noticeId" },
        ]
      },
    ]
  });
};
