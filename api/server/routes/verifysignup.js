const jwt = require('jsonwebtoken');

import UserController from '../controllers/UserController';


 
function verifyemail(req, res, next) {
 
  var requestType = req.get('Content-Type');
  console.log("requestType"+requestType)
  
  if(requestType=="application/x-www-form-urlencoded"){
   
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