const Repository = require('../models/repository');

exports.addFile = (req, res, next) => {
    const image = req.protocol + "://" + req.get("host");
    Repository
        .create({
            data: image + "/images/" + req['file'].filename
        })
        .then(_ => {
            res.status(200).json({
                message: 'File add successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getAll = (req, res, next) => {
    Repository
        .findAll()
        .then(result => {
            res.status(200).json({
                data: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
