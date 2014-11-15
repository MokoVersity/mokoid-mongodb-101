var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/vcard9');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('MongoDB: connected.');	
});

var vcardSchema = mongoose.Schema({
    name: String,
    nickname: String,
    tel: String
})

var model = mongoose.model('vcard', vcardSchema)

// CRUD section

var create = function() {
	var person = {
		name: 'jollen',
		tel: '0987654321'
	};

	var card = new model(person);
	card.save();

	console.log('created.');
};

create();


