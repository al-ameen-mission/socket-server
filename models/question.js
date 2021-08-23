const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
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
      allowNull: true,
      defaultValue: 0
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
    group_subject: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    answer_hints: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer_hints_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    question_bank_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    correctAnswer_2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    correctAnswer_3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    correctAnswer_4: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    wrong_question: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    examdetails_section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'question',
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
      {
        name: "examdetailsId",
        using: "BTREE",
        fields: [
          { name: "examdetailsId" },
        ]
      },
    ]
  });
};
