"use strict";

module.exports = function(sequelize, DataTypes) {
    var InstallCount = sequelize.define("Installs", {
        num_installs: {type: DataTypes.BIGINT},
        category: {type: DataTypes.ENUM('jetfuel', 'total'), allowNull: false, defaultValue: 'total'},
        date_pst: {type: DataTypes.DATEONLY, defaultValue: sequelize.literal('date(timezone(\'PST\'::text, now()))')},
    }, {
        paranoid: true,
        underscored: true,
        tableName: 'install_counts',
        indexes: [{fields: ['date_pst']},  {fields: ['created_at']} ],
    });

    return InstallCount;
};
