const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_certificate', {
    student_certificate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    certificate_template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    asession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    roll_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ref_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    print_head: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    text_line_1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text_line_2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text_line_3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text_line_4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text_line_5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text_line_6: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    template_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    print_header: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
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
    tableName: 'student_certificate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "student_certificate_id" },
        ]
      },
    ]
  });
};
