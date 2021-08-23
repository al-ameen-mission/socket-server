const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch', {
    branch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branch_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    branch_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pin_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tagline: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    logoimage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    theme_data: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lognitude: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    incharge_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    unit_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    group_unit: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    estd_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    class_list: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    r_n: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    campus_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dist: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
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
    tableName: 'branch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
    ]
  });
};
