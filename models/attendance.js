const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance', {
    attendanceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roll_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    absent_present: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'attendance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attendanceId" },
        ]
      },
    ]
  });
};
