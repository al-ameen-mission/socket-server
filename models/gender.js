const { conversionStringToBoolean } = require("./../lib/utils");

module.exports = (sequelize, DataTypes) => {

    let gender = sequelize.define("gender", {

        "name": {
            type: DataTypes.STRING(32)
        },
        "short_name": {
            type: DataTypes.STRING(32)
        },
        "remark": {
            type: DataTypes.STRING(96)
        },
        "status": {
            type: DataTypes.INTEGER
        },
    });

    gender.STATUS = {
        "INACTIVE": 0,
        "ACTIVE": 1
    };

    const forceCreateTable = conversionStringToBoolean(process.env.DB_FORCE_CREATE_TABLES);
    const forceDataInsert = conversionStringToBoolean(process.env.DB_FORCE_INSERT_DATA_IN_TABLES);

    // force: true will drop the table if it already exists
    gender.sync({ "force": forceCreateTable }).then(() => {
        if (forceCreateTable || forceDataInsert)
            gender.bulkCreate([{
                "id": 1,
                "name": "MALE",
                "short_name": "M",
                "remark": "",
                "status": gender.STATUS.ACTIVE
            }, {
                "id": 2,
                "name": "FEMALE",
                "short_name": "F",
                "remark": "",
                "status": gender.STATUS.ACTIVE
            }]);

        return;
    });

    gender.getActiveGenders = (conditions = {}) => {
        let whereConditions = {
            "status": gender.STATUS.ACTIVE
        }
        if (conditions != {})
            whereConditions = conditions;
        return gender.findAll({
            attributes: ["id", "name", "short_name"],
            where: whereConditions
        });
    };

    gender.getActiveGender = (conditions = {}) => {
        let whereConditions = {
            "status": gender.STATUS.ACTIVE
        }
        if (conditions != {})
            whereConditions = conditions;
        return gender.findOne({
            attributes: ["id", "name", "short_name"],
            where: whereConditions
        });
    };

    return gender;
};