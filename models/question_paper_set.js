const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question_paper_set', {
    question_paper_set_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    view_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    set_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'question_paper_set',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question_paper_set_id" },
        ]
      },
    ]
  });
};
