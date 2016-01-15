var UserModel = require('./UserModel');

UserModel.find({surname:'Skalli'}, function(err, doc){
  console.log(doc);
});
