const appConstants = require("../config/appConstants");
const axios = require('axios');
const db = require("../models");

var itc = require('itunesconnectanalytics');
var Itunes = itc.Itunes;
var AnalyticsQuery = itc.AnalyticsQuery;
var totalUnits = 0;
var numberOfUsers = 4;
var totalAndroid = 1000000;
var totalBoomerang = 123000000;

// Naoki
var username = NAOKI_DATA_USERNAME;
var password = NAOKI_DATA_PASSWORD;
var naokiinstance = new Itunes(username, password, {
    errorCallback: function(e) {
        console.log('Error logging in: ' + e);
    },
    successCallback: function(d) {
        console.log('Logged in');
    }
});
naokiinstance.getApps(function(error, data) {
    var numNaokiApps = data['results'].length;
    data['results'].forEach(function (appData) {
        var query = AnalyticsQuery.metrics(appData['adamId'], {
            measures:  itc.measures.units,
            frequency: 'MONTH',
        }).date('2014-10-01','2018-08-20');
        naokiinstance.request(query, function(error, result) {
            console.log(result['results'][0]['totals']['value']);
            totalUnits = totalUnits + parseInt(result['results'][0]['totals']['value']);
            console.log(totalUnits);

            // Countdown
            numNaokiApps = numNaokiApps -1;
            if (numNaokiApps == 0) {
                numberOfUsers = numberOfUsers - 1;
                if (numberOfUsers == 0) {
                    var totalInstalls = (totalUnits + totalAndroid + totalBoomerang);
                    db.InstallCount.create({
                        category: "total",
                        installs: totalInstalls
                    }).then(function(installCount) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs added", "Success: " + totalInstalls, null);
                    }).catch(function(error) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs failed", "error: " + error, null);
                    });
                }
            }
        });
    });
});


// Personal
var username = PERSONAL_DATA_USERNAME;
var password = PERSONAL_DATA_PASSWORD;
var personalinstance = new Itunes(username, password, {
    errorCallback: function(e) {
        console.log('Error logging in: ' + e);
    },
    successCallback: function(d) {
        console.log('Logged in');
    }
});
personalinstance.getApps(function(error, data) {
    var numPersonalApps = data['results'].length;
    data['results'].forEach(function (appData) {
        var query = AnalyticsQuery.metrics(appData['adamId'], {
            measures:  itc.measures.units,
            frequency: 'MONTH',
        }).date('2014-10-01','2018-08-20');
        personalinstance.request(query, function(error, result) {
            console.log(result['results'][0]['totals']['value']);
            totalUnits = totalUnits + parseInt(result['results'][0]['totals']['value']);
            console.log(totalUnits);

            // Countdown
            numPersonalApps = numPersonalApps -1;
            if (numPersonalApps == 0) {
                numberOfUsers = numberOfUsers - 1;
                if (numberOfUsers == 0) {
                    var totalInstalls = (totalUnits + totalAndroid + totalBoomerang);
                    db.InstallCount.create({
                        category: "total",
                        installs: totalInstalls
                    }).then(function(installCount) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs added", "Success: " + totalInstalls, null);
                    }).catch(function(error) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs failed", "error: " + error, null);
                    });
                }
            }
        });
    });
});


// Mango Labs
var username = process.env.MANGO_DATA_USERNAME;
var password = process.env.MANGO_DATA_PASSWORD;
var mangoinstance = new Itunes(username, password, {
    errorCallback: function(e) {
        console.log('Error logging in: ' + e);
    },
    successCallback: function(d) {
        console.log('Logged in');
    }
});
mangoinstance.getApps(function(error, data) {
    var numMangoApps = data['results'].length;
    data['results'].forEach(function (appData) {
        var query = AnalyticsQuery.metrics(appData['adamId'], {
            measures:  itc.measures.units,
            frequency: 'MONTH',
        }).date('2014-10-01','2018-08-20');
        mangoinstance.request(query, function(error, result) {
            console.log(result['results'][0]['totals']['value']);
            totalUnits = totalUnits + parseInt(result['results'][0]['totals']['value']);
            console.log(totalUnits);

            // Countdown
            numMangoApps = numMangoApps -1;
            if (numMangoApps == 0) {
                numberOfUsers = numberOfUsers - 1;
                if (numberOfUsers == 0) {
                    var totalInstalls = (totalUnits + totalAndroid + totalBoomerang);
                    db.InstallCount.create({
                        category: "total",
                        installs: totalInstalls
                    }).then(function(installCount) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs added", "Success: " + totalInstalls, null);
                    }).catch(function(error) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs failed", "error: " + error, null);
                    });
                }
            }
        });
    });
});


// Real Labs
var username = process.env.RL_DATA_USERNAME;
var password = process.env.RL_DATA_PASSWORD;
var rlinstance = new Itunes(username, password, {
    errorCallback: function(e) {
        console.log('Error logging in: ' + e);
    },
    successCallback: function(d) {
        console.log('Logged in');
    }
});
rlinstance.getApps(function(error, data) {
    var numRealLabsApps = data['results'].length;
    data['results'].forEach(function (appData) {
        var query = AnalyticsQuery.metrics(appData['adamId'], {
            measures:  itc.measures.units,
            frequency: 'MONTH',
        }).date('2014-10-01','2018-08-20');
        rlinstance.request(query, function(error, result) {
            console.log(result['results'][0]['totals']['value']);
            totalUnits = totalUnits + parseInt(result['results'][0]['totals']['value']);
            console.log(totalUnits);

            // Countdown
            numRealLabsApps = numRealLabsApps -1;
            if (numRealLabsApps == 0) {
                numberOfUsers = numberOfUsers - 1;
                if (numberOfUsers == 0) {
                    var totalInstalls = (totalUnits + totalAndroid + totalBoomerang);
                    db.InstallCount.create({
                        category: "total",
                        installs: totalInstalls
                    }).then(function(installCount) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs added", "Success: " + totalInstalls, null);
                    }).catch(function(error) {
                        appConstants.sendEmail('tim@jetfuel.it', "Installs failed", "error: " + error, null);
                    });
                }
            }
        });
    });
});


axios.get('https://www.plugco.in/installs')
    .then(response => {
        count = parseInt(response['data']['count']);
        db.InstallCount.create({
            category: "total",
            installs: count
        }).then(function(installCount) {
            appConstants.sendEmail('tim@jetfuel.it', "JetFuel Installs added", "Success: " + count, null);
        }).catch(function(error) {
            appConstants.sendEmail('tim@jetfuel.it', "Getting JetFuel Installs failed", "error: " + error, null);
        });
    })
    .catch(error => {
        appConstants.sendEmail('tim@jetfuel.it', "Getting JetFuel installs failed", "error: " + error, null);
    });
