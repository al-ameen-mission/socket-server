const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fees_student_details', {
    fees_student_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fees_student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feesType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    accademicsessionId: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fees_head: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT(7,2),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fees_student_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fees_student_details_id" },
        ]
      },
    ]
  });
};
