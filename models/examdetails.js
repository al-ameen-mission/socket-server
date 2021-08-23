const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('examdetails', {
    examdetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    written: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    viva: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    practical: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    viva_fields: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalMarks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exam_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publish_result: {
      type: DataTypes.INTEGER,
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
    tableName: 'examdetails',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "examdetailsId" },
        ]
      },
    ]
  });
};
