const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_issue', {
    mess_issue_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mess_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rate: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    primery_verification_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    final_verification_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primery_verification_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    final_verification_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    branch_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
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
    tableName: 'mess_issue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mess_issue_id" },
        ]
      },
    ]
  });
};
