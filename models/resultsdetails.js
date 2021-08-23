const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resultsdetails', {
    resultsdetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subjectId: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    writtenMarks: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    viva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    viva_fields_marks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalMarks: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    negative_attempt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    positive_attempt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    negative_marks: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    positive_marks: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resultsdetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resultsdetailsId" },
        ]
      },
    ]
  });
};
