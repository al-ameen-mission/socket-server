const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holidays', {
    holidaysId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'holidays',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "holidaysId" },
        ]
      },
    ]
  });
};
