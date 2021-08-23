const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dbbackup', {
    dbbackup_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    import_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    import_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    export_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    export_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dbbackup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dbbackup_id" },
        ]
      },
    ]
  });
};
