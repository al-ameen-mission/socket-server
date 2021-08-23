const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hostel_room', {
    hostel_room_id: {
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
    room_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bed_from: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    bed_to: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    bed_list: {
      type: DataTypes.STRING(80),
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
    tableName: 'hostel_room',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hostel_room_id" },
        ]
      },
    ]
  });
};
