const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eclass_access', {
    aclass_access_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branch_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    session: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    eclass_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'eclass_access',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aclass_access_id" },
        ]
      },
    ]
  });
};
