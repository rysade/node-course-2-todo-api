/**
 * Created by rysade on 3/18/17.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 5,
        trim: true
    }
});

module.exports = {User};