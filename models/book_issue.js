const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_issue', {
    book_issue_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    issue_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_return: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    member_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    member_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_table: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    book_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(20),
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
    tableName: 'book_issue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "book_issue_id" },
        ]
      },
    ]
  });
};
