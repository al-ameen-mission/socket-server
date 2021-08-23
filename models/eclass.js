const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eclass', {
    eclass_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asession: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chapter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    search_keys: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    video_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    video_link: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_meeting: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    meeting_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meeting_password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    meeting_link: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    meeting_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    meeting_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    study_materials: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    homework: {
      type: DataTypes.STRING(999),
      allowNull: false
    },
    active_status: {
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
    tableName: 'eclass',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eclass_id" },
        ]
      },
    ]
  });
};
