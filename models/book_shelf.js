const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_shelf', {
    book_shelf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    building_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    floor_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    room: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sub_place: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
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
    tableName: 'book_shelf',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_shelf_id" },
        ]
      },
    ]
  });
};
