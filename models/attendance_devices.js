const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance_devices', {
    attendance_device_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branch_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    active_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'attendance_devices',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attendance_device_id" },
        ]
      },
    ]
  });
};
