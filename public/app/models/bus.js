

var mongoose = require('mongoose');


module.exports = mongoose.model('Bus', {
	number : {type : String, default: ''}
});
