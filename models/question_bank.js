const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question_bank', {
    questionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boardId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    negetive_marks: {
      type: DataTypes.FLOAT(4,2),
      allowNull: false
    },
    viewOrder: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    overAllStar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1,2,3,4,5"
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    questionImage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answerText1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answerImage1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answerText2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answerImage2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answerText3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answerImage3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answerText4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answerImage4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    correctAnswer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1,2,3,4"
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    question_chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_base: {
      type: DataTypes.STRING(50),
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
    question_raw_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'question_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionId" },
        ]
      },
    ]
  });
};
