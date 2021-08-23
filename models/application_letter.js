const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application_letter', {
    application_letter_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status_by_user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(30),
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
    modifyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifyBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'application_letter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "application_letter_id" },
        ]
      },
    ]
  });
};
