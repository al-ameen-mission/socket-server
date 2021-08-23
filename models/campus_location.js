const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campus_location', {
    campus_location_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campus_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    campus_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(200),
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
    tableName: 'campus_location',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "campus_location_id" },
        ]
      },
    ]
  });
};
