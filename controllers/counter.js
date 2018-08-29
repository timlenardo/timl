

exports.getInstallTotalRate = async(req, res) => {
    try {
        let installCounts = await  db.sequelize.query("SELECT * " +
            "FROM install_counts " +
            "WHERE category = 'total' " +
            "ORDER BY created_at DESC " +
            "LIMIT 2;"
            , {type: 'RAW'});


        let lastInstallCount = parseInt(installCounts[0][0]['num_installs']);
        let secondToLastInstallCount = parseInt(installCounts[0][1]['num_installs']);
        let lastCreatedAt = installCounts[0][0]['created_at'] / 1000;
        let secondToLastCreatedAt = installCounts[0][1]['created_at'] / 1000;

        let rate = (lastInstallCount - secondToLastInstallCount) / (lastCreatedAt - secondToLastCreatedAt);
        let timeSince = (Date.now() / 1000) - lastCreatedAt;
        let curCount = parseInt(lastInstallCount) + Math.round(rate * timeSince);
        let countRate = Math.round(1 / rate * 1000);

        // Can be null if no change
        res.send({
            'rate' : rate != Infinity ? countRate : 3000,
            'num_installs' : curCount
        });
    } catch (err) {
        res.send({
            'rate' : 3000,
            'num_installs' : 125069207
        });
    }
};

// Returns time
exports.getInstallJetFuelRate = async(req, res) => {
    try {
        let installCounts = await  db.sequelize.query("SELECT * " +
            "FROM install_counts " +
            "WHERE category = 'jetfuel' " +
            "ORDER BY created_at DESC " +
            "LIMIT 2;"
            , {type: 'RAW'});

        let lastInstallCount = parseInt(installCounts[0][0]['num_installs']);
        let secondToLastInstallCount = parseInt(installCounts[0][1]['num_installs']);
        let lastCreatedAt = installCounts[0][0]['created_at'] / 1000;
        let secondToLastCreatedAt = installCounts[0][1]['created_at'] / 1000;

        let rate = (lastInstallCount - secondToLastInstallCount) / (lastCreatedAt - secondToLastCreatedAt);
        let timeSince = (Date.now() / 1000) - lastCreatedAt;
        let curCount = parseInt(lastInstallCount) + Math.round(rate * timeSince);
        let countRate = Math.round(1 / rate * 1000);

        // Can be null if no change
        res.send({
            'rate' : rate != Infinity ? countRate : 3000,
            'num_installs' : curCount
        });
    } catch (err) {
        res.send({
            'rate' : 3000,
            'num_installs' : 2492704
        });
    }
};