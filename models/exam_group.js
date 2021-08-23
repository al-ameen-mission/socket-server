const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exam_group', {
    exam_group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exam_group_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch_codes: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exam_mode: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exam_start_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    exam_end_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    for_all_branches: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    question_verified: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'exam_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exam_group_id" },
        ]
      },
    ]
  });
};
