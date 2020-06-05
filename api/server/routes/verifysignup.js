const jwt = require('jsonwebtoken');

import UserController from '../controllers/userController';


 
function verifyemail(req, res, next) {
 
  console.log("requestType"+req.is('application/x-www-form-urlencoded'))
  
  if(req.is('application/x-www-form-urlencoded')){
   
    next();
  }

else{
  return res.status(403).send({ 
    auth: false, 
    message: 'content type is not accepted '
  });
}
}
 

 

 
const verfifysignup = {};
verfifysignup.verifyemail = verifyemail;

 

module.exports = verfifysignup;