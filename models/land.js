const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land', {
    land_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_unit: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    owner_organisation: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    column_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_pit_deed_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_registry_office: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_deed_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_market_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_purchase_or_setforth_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_expense: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_total_expense: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_deed_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_recieved_unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_issued_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_issued_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deed_recieved_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deed_recieved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    land_deed_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_vill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_po: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_ps: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_block: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_dist: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_pin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_panchayat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_mouza: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_jl_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_khatian_no_rs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_khatian_no_lr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_dag_no_rs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_dag_no_lr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    land_total_volumn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meeting_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meeting_resolution_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mutation_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mutation_khatian_no_rs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mutation_khatian_no_lr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mutation_dag_no_rs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mutation_dag_no_lr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_dag_no_rs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_dag_no_lr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_mission_khatian_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_volume: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_classification_as_per_ror: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_classification_which_permission_accorded: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conversion_memo_no_date: {
      type: DataTypes.DATE,
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
    tableName: 'land',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "land_id" },
        ]
      },
    ]
  });
};
