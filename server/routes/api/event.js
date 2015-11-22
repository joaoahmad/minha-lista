var mongoose = require('mongoose');
var Event = require('../../models/event');

module.exports.get = function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

module.exports.add = function(req, res) {
    console.log(req.body);
    var event = new Event(req.body);
    event.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

module.exports.delete = function(req, res) {
    Event.remove({_id: req.params.id}, function(err){
        if (err) {
            res.send(err);
        }
        res.send(200);
    });
};
