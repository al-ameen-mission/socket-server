const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('self_assesment', {
    self_assesment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eclass_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    submit_paper: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    level: {
      type: DataTypes.STRING(999),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'self_assesment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "self_assesment_id" },
        ]
      },
    ]
  });
};
