const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_details', {
    review_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_table: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contact_no: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    review_marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review_note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
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
    tableName: 'review_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_details_id" },
        ]
      },
    ]
  });
};
