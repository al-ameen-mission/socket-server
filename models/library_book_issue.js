const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('library_book_issue', {
    library_book_issue_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issue_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    item_unique_id: {
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
    studentId: {
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
    tableName: 'library_book_issue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "library_book_issue_id" },
        ]
      },
    ]
  });
};
