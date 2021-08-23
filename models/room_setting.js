const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room_setting', {
    room_setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hostel_room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bed_no: {
      type: DataTypes.STRING(15),
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
    class_id: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'room_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "room_setting_id" },
        ]
      },
    ]
  });
};
