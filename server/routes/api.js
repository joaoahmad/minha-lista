var express = require('express');
var router = express.Router();

var users = require('./api/user');
var markers = require('./api/marker');

router.route('/users')
    .post(function(req, res){ users.add(req, res) })
    .get(function(req, res){ users.get(req, res) });

router.route('/markers')
    .post(function(req, res){ markers.add(req, res) })
    .get(function(req, res){ markers.get(req, res) });

module.exports = router;

//{"user":{"name":"João Ahmad","role":"admin"}}
//{"marker":{"lat":"-22.85652","lng":"-43.45271"}}
