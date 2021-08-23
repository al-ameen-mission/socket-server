const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    subjectId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subjectName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    subjectStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Elective: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    board: {
      type: DataTypes.STRING(10),
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
    subject_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subject',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subjectId" },
        ]
      },
    ]
  });
};
