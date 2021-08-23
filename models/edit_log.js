const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('edit_log', {
    edit_log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    table_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    table_id_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    table_field: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    old_val: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    new_val: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'edit_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "edit_log_id" },
        ]
      },
    ]
  });
};
