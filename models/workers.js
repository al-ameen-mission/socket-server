const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workers', {
    worker_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    worker_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_mobile: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_designation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_id_proof: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_rate: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    departments: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    worker_active_status: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    worker_note: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'workers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "worker_id" },
        ]
      },
    ]
  });
};
