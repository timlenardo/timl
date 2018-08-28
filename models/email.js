"use strict";

module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define("Email", {
        email: {type: DataTypes.STRING},
        date_pst: {type: DataTypes.DATEONLY, defaultValue: sequelize.literal('date(timezone(\'PST\'::text, now()))')},
    }, {
        paranoid: true,
        underscored: true,
        tableName: 'email',
        indexes: [{fields: ['date_pst']},  {fields: ['email']} ],
    });

    return Email;
};