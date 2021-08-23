const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_meta', {
    student_meta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medium: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_fees: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    referer_details: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    eye_power: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    psychiatric_report: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mother_tongue: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apl_bpl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    father_adhar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mother_adhar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email_guardian: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    passport_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vissa_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    passport_valid_up_to: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    caste_cert_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cast_cert_issue_auth: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cast_cert_issue_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disabled: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disable_body_parts: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disable_percet: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disable_cert_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disable_cert_issue_auth: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disable_cert_issue_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_dist: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_sub_division: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_town: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_semi_town: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_vill: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    living_area_gram_panchayet: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    any_bro_sis_presently: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bro_sis_presently_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    any_bro_sis_passed: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bro_sis_passed_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    any_family_is_mission_emp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    family_is_mission_emp_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_father_alive: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    father_date_of_death: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    father_qualification: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    father_monthly_income: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_mother_alive: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mother_date_of_death: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mother_qualification: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mother_monthly_income: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gurdian_qualification: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gurdian_monthly_income: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_vill: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_po: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_ps: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_block: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr__dist: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    corr_pin: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_school: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_class: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_school_session: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tc_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tc_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    student_id_in_TC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_school_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_contact: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_class: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_session: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_roll: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    present_school_section: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    accNo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    accHolderName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ifscCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_branch: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kanyashree_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kanyashree_ID_NO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_name_of_board: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_passed_year: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_roll: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_beng_hindi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_math: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_physc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_lifesc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_history: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_geography: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_socialsc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_total_obt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_out_of: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ten_marks_percent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_name_of_board: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_passed_year: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_roll: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_stream: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_beng_hindi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_math: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_physc: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_biology: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_chemistry: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_total_obt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_out_of: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    twelve_marks_percent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_passed: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_passed_subject: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_passed_year: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_passed_university: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_subjects: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_subjects_marks: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_total_obt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_out_of: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    graduate_percent: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    student_other_info: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'student_meta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "student_meta_id" },
        ]
      },
    ]
  });
};
