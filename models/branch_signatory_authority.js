const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_signatory_authority', {
    branch_signatory_authority_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    branch_code: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    head_key: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'branch_signatory_authority',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "branch_signatory_authority_id" },
        ]
      },
    ]
  });
};
