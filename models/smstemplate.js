const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smstemplate', {
    smstemplateId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    templatekey: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    templatestatus: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    templateorder: {
      type: DataTypes.INTEGER,
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
    tableName: 'smstemplate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "smstemplateId" },
        ]
      },
    ]
  });
};
