const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacherattendance', {
    teacherattendanceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asession: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    absent_present: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'teacherattendance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacherattendanceId" },
        ]
      },
    ]
  });
};
