const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questionanswared', {
    questionanswaredId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resultsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    answerSelected: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
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
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'questionanswared',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionanswaredId" },
        ]
      },
    ]
  });
};
