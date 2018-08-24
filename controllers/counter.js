

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

        let lastCreatedAt = installCounts[0][0]['created_at'].getTime();
        let secondToLastCreatedAt = installCounts[0][1]['created_at'].getTime();

        let rate = (lastInstallCount - secondToLastInstallCount) / (lastCreatedAt - secondToLastInstallCount);

        console.log("First " + lastInstallCount + " Second " + secondToLastInstallCount);
        console.log("First " + lastCreatedAt + " Second " + secondToLastCreatedAt);
        console.log(rate);

        // await asyncForEachInternal(installCounts[0], async (installCounts) => {
        //
        //     let testing = count[0][0];
        //     res.send(testing);
        // });

        res.sendStatus(200);

    } catch (err) {
        console.log("err: " + err);
        res.sendStatus(400);
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

        let testing = count[0][0];
        res.send(testing);

    } catch (err) {
        console.log("err: " + err);
        res.sendStatus(400);
    }
};