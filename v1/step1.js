var UserModel = require('./UserModel');

var userToSave = new UserModel({name: 'Abdelaziz', surname: 'Skalli', telephone:'0836656565', gender:'Male'});

userToSave.save(function(err, doc){
  console.log(doc)
});
