const jwt = require('jsonwebtoken');



 
function verifyToken(req, res, next) {
  let token = req.headers['x-access-token'];
  var requestType =req.headers['accept']; 
  console.log("requestType",requestType)
  if (!token){
    return res.status(403).send({ 
      auth: false, message: 'No token provided.' 
    });
  }
  if(requestType=="application/x-www-form-urlencoded"){
 
  jwt.verify(token,process.env.SECRET_KEY, (err, decoded) => {
    if (err){
      return res.status(500).send({ 
          auth: false, 
          message: 'Fail to Authentication. Error -> ' + err 
        });
    }
    req.userId = decoded.id;
    next();
  });
}
else{
  return res.status(403).send({ 
    auth: false, 
    message: 'content type is not accepted '
  });
}
}
 

 

 
const authJwt = {};
authJwt.verifyToken = verifyToken;

 
module.exports = authJwt;