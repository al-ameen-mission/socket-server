const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rbcontact', {
    rbcontactId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refCode: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    person: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    rbcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rblocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contactStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    websiteUrl: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    refferBy: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rbcontact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rbcontactId" },
        ]
      },
    ]
  });
};
