const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('followupcontact', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    shortNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    followStatus: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    catId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    company: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    appDate: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    assignTo: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nextFollowDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'followupcontact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
