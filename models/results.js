const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('results', {
    resultsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asession: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    class_id: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    totalExamMarks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obtainMarks: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'results',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resultsId" },
        ]
      },
    ]
  });
};
