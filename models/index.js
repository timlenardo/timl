'use strict';

const os = require('os');
const numWorkers = process.env.WEB_CONCURRENCY || os.cpus().length;
const winston = require('../config/appConstants').winston;
const env = (process.env.DATABASE_URL) ? "prod": "dev";

let SearchModel = require("pg-search-sequelize");

function logging(string) {
    const result = string.match(/error/i);
    if(result) { winston.error(string); }
    else if(env == "dev") {
        winston.info(string);
    }
}

if (!global.hasOwnProperty('db')) {
    let Sequelize = require('sequelize')
        , sequelize = null;

    const Op = Sequelize.Op;
    const operatorsAliases = {
        $eq: Op.eq,
        $ne: Op.ne,
        $gte: Op.gte,
        $gt: Op.gt,
        $lte: Op.lte,
        $lt: Op.lt,
        $not: Op.not,
        $in: Op.in,
        $notIn: Op.notIn,
        $is: Op.is,
        $like: Op.like,
        $notLike: Op.notLike,
        $iLike: Op.iLike,
        $notILike: Op.notILike,
        $regexp: Op.regexp,
        $notRegexp: Op.notRegexp,
        $iRegexp: Op.iRegexp,
        $notIRegexp: Op.notIRegexp,
        $between: Op.between,
        $notBetween: Op.notBetween,
        $overlap: Op.overlap,
        $contains: Op.contains,
        $contained: Op.contained,
        $adjacent: Op.adjacent,
        $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight,
        $noExtendRight: Op.noExtendRight,
        $noExtendLeft: Op.noExtendLeft,
        $and: Op.and,
        $or: Op.or,
        $any: Op.any,
        $all: Op.all,
        $values: Op.values,
        $col: Op.col
    };

    if (process.env.DATABASE_URL) {
        console.log("Loading up our DB");
        console.log(process.env.DATABASE_URL);

        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     5432,
            operatorsAliases: operatorsAliases,
            logging:  logging,
            dialectOptions: {
                ssl: true
            },
            pool: {
                max: 300 / (process.env.WEB_CONCURRENCY || os.cpus().length),
                min: 2,
                idle: 10000,
                acquire: 20000
            },
            retry: { match: 'SequelizeDatabaseError: could not serialize access due to concurrent update', max: 3 }
        });
    } else {
        // the application is executed on the local machine
        sequelize = new Sequelize('theplug', 'postgres', 'riffle', {
            host: 'localhost',
            dialect: 'postgres',
            logging:  logging,
            operatorsAliases: operatorsAliases,
            port: 5432,
            pool: {
                max: 120 / (process.env.WEB_CONCURRENCY || os.cpus().length),
                min: 2,
                idle: 10000,
                acquire: 20000
            },
            retry: { match: 'SequelizeDatabaseError: could not serialize access due to concurrent update', max: 3 }
        });
    }


    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        InstallCount:      sequelize.import(__dirname + '/installCount'),
    };

    global.db.Op = Sequelize.Op;
}

module.exports = global.db;

