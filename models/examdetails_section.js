const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('examdetails_section', {
    examdetails_section_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    max_attempt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    examdetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'examdetails_section',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "examdetails_section_id" },
        ]
      },
    ]
  });
};
