const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exam', {
    examId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    examCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch_codes: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    docs_file1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    docs_file2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    instractions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    publish_result: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    show_on_result: {
      type: DataTypes.STRING(3),
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
    tableName: 'exam',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "examId" },
        ]
      },
    ]
  });
};
