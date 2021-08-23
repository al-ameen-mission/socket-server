const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exam_group_class_access', {
    exam_group_class_access_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exam_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exam_group_class_access',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exam_group_class_access_id" },
        ]
      },
    ]
  });
};
