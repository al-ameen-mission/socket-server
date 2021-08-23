const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mess_meal_member', {
    mess_meal_member_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total_student_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_student_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_student_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_student_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_teacher_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_teacher_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_teacher_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_teacher_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_office_staff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_office_staff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_kichen_staff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_kichen_staff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_gurdian_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_gurdian_m: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_gurdian_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_gurdian_f: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_present: {
      type: DataTypes.INTEGER,
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
    primery_verification_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    final_verification_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    submitted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'mess_meal_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mess_meal_member_id" },
        ]
      },
    ]
  });
};
