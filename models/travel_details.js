const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('travel_details', {
    travel_details_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    traveller_names: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_meter_reading: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    end_meter_reading: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    distance_traveled: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehicle_regno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vehicle_model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vehicle_make: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    rate_per_km: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_km: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    price_on_km: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    rate_per_hour: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_hour: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false
    },
    price_on_hour: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    cotract_price: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    fuel_price: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    other_price_details: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    other_price: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    total_price: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    status_approved: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status_paid: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    payment_reference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paid_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active_status: {
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
    tableName: 'travel_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "travel_details_id" },
        ]
      },
    ]
  });
};
