var UserModel = require('./UserModel');

UserModel.find({surname:'Poulen'}, function(err, doc){
  console.log(doc);
})
