const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ISBN: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    publisher: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    edition: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    edition_date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    book_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'book',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  });
};
