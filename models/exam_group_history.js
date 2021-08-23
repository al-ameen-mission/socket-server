const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exam_group_history', {
    exam_group_history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exam_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    submit_paper: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    exam_start: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    exam_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    submit_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    question_set: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exam_mode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "Online"
    }
  }, {
    sequelize,
    tableName: 'exam_group_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exam_group_history_id" },
        ]
      },
    ]
  });
};
