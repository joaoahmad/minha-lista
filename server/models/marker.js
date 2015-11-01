var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkerSchema = new Schema({
    oque: String,
    lat: Number,
    lng: Number,
});

module.exports = mongoose.model('Marker', MarkerSchema);
