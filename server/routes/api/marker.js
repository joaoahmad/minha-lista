var mongoose = require('mongoose');
var Marker = require('../../models/marker');

module.exports.add = function(req, res) {
  console.log(req.body);
    var marker = new Marker(req.body);
    marker.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({marker: marker});
    });
};

module.exports.get = function(req, res) {
    Marker.find(function(err, markers) {
        if (err)
            res.send(err);

        res.json(markers);
    });
};
