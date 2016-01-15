var mongoose = require('mongoose');

var urlDatabase = 'mongodb://michwii:Elyeshm1806@ds027335.mongolab.com:27335/prince';

var connection = mongoose.connection;
if(!connection.readyState){
	connection = mongoose.connect(urlDatabase);
}

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CustomerModel = new Schema({
    id    											: ObjectId,
    name     										: String,
    surname      								: String,
    telephone      							: String,
		email												: String,
		zipcode											: String,
		address											: String

}, {strict: true});

/*below we define a custom behaviour.
We want that each time a physical document is retrived from MongoDB we delete the properties from the instance returned to the client
that are not present within the schema
*/
var filter = function (doc, ret, options) {
  Object.keys(ret).forEach(function (element, index) {
    if(doc.schema.paths[element] == undefined){
      delete ret[element];
    }
  });
	Object.keys(doc.schema.paths).forEach(function (element, index) {
    if(ret[element] == undefined && element != 'id'){
      ret[element] = null;
    }
  });
}
if (!CustomerModel.options.toObject){
	CustomerModel.options.toObject = {};
}
if (!CustomerModel.options.toJSON){
	CustomerModel.options.toJSON = {};
}
CustomerModel.options.toObject.transform = filter;
CustomerModel.options.toJSON.transform = filter;

module.exports = mongoose.model('DEMO', CustomerModel);
