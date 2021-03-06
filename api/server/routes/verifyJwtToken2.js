const jwt = require('jsonwebtoken');



 
function verifyToken2(req, res, next) {
  let token = req.headers['x-access-token'];
  var requestType =req.headers['content-type']; 
 
  if (!token){
    return res.status(403).send({ 
      auth: false, message: 'No token provided.' 
    });
  }
 
 
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
 

 

 
const authJwt2 = {};
authJwt2.verifyToken2 = verifyToken2;

 
module.exports = authJwt2;