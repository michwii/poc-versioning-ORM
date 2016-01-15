var UserModel = require('./UserModel');

var userToSave = new UserModel({name: 'Yannick', surname: 'Poulen', telephone:'0836656565', email:'yannick.poulen@axa.fr', address: '10 rue de verdun', zipcode:'78300'});

userToSave.save(function(err, doc){
  console.log(doc);
});
