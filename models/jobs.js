const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    job_type_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    campus_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    manager_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    job_note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Completed,Cancelled "
    },
    branch_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};
