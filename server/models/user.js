var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    role: String,
    markers: [{ type: Schema.Types.ObjectId, ref: 'Marker' }]
});

module.exports = mongoose.model('User', UserSchema);  