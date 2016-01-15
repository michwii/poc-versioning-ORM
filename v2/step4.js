var UserModel = require('./UserModel');

UserModel.findOne({surname:'Skalli'}, function(err, doc){
  doc.email = 'abdelaziz.skalli@axa.fr';
  doc.save(function(err, data){
    console.log(data);
  });
});
