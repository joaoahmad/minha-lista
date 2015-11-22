var express = require('express');
var router = express.Router();

var users = require('./api/user');
var events = require('./api/event');

router.route('/users')
    .get(function(req, res){ users.get(req, res) })
    .post(function(req, res){ users.add(req, res) });

router.route('/events')
    .get(function(req, res){ events.get(req, res) })
    .post(function(req, res){ events.add(req, res) });

router.route('/events/:id')
    .delete(function(req, res){ events.delete(req, res) });

module.exports = router;
