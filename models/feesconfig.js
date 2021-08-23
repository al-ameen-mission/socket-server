const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feesconfig', {
    feesconfigId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feesType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    student_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    accademicsessionId: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    classId: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    feesHead: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    dueDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feesconfig',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feesconfigId" },
        ]
      },
    ]
  });
};
