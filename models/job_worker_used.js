const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_worker_used', {
    job_worker_used_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    worker_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    labor_rate: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'job_worker_used',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_worker_used_id" },
        ]
      },
    ]
  });
};
