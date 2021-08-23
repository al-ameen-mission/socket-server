const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('school_setting', {
    school_setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    school_name: {
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    database_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    schoolCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tagline: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    logoimage: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    theme_data: {
      type: DataTypes.TEXT,
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
    tableName: 'school_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "school_setting_id" },
        ]
      },
    ]
  });
};
