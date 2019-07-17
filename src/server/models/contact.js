var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
        name: String,
        city: String,
        email: String,
        phone: String,
        topic: String,
        comment: String,
        timePreference: String,
        subscribe: Boolean,
});

module.exports = mongoose.model('contact', contactSchema, 'contacts');
