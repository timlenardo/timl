
exports.insertEmail = async(req, res) => {
    if (req.query.email != null) {
        db.Email.create({
            email: req.query.email,
        }).then(function (event) {
            res.sendStatus(200);
        }).catch(function (err) {
            res.sendStatus(400);
        });
    } else {
        res.sendStatus(400);
    }
};