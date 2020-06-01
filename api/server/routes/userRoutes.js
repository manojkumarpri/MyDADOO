import { Router } from 'express';
import UserController from '../controllers/UserController';
const authJwt = require('./verifyJwtToken');
const verfifysignup = require('./verifysignup');
const router = Router();
/**
 * @api {get} /user/ Request get all User information
 * @apiName GetAllUser
 * @apiGroup User
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "status": "success",
    "message": "Users retrieved",
    "data": [
        {
            "id": 1,
            "fullname": "Manojkumar",
            "email": "manojkumarssaug6@gmail.com",
            "mobile": "7708087463",
            "password": "manoj@11",
            "createdAt": "2020-05-28T12:48:49.563Z",
            "updatedAt": "2020-05-28T12:48:49.563Z"
        },
        {
            "id": 2,
            "fullname": "venkat",
            "email": "manojkumar11tpr@gmail.com",
            "mobile": "7708087463",
            "password": "manoj@11",
            "createdAt": "2020-05-30T21:15:12.186Z",
            "updatedAt": "2020-05-30T21:15:12.186Z"
        },
        {
            "id": 3,
            "fullname": "vignesh",
            "email": "vigneshwaransasurie6@gmail.com",
            "mobile": "9597299278",
            "password": "vignesh",
            "createdAt": "2020-05-30T21:16:43.813Z",
            "updatedAt": "2020-05-30T21:16:43.813Z"
        },
        {
            "id": 4,
            "fullname": "ganesh",
            "email": "ganeshsasurie4@gmail.com",
            "mobile": "9597299278",
            "password": "ganesh@11",
            "createdAt": "2020-05-30T21:18:44.627Z",
            "updatedAt": "2020-05-30T21:18:44.627Z"
        }
    ] 
 *     }
 *
 * @apiError UserNotFound The User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],  UserController.getAllUsers);
/**
 * @api {post} /user/sigin signin User
 * @apiName login user
 * @apiGroup User
 *

 *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} password  password of the User.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *    "status": "success",
    "message": "Found User",
    "data": {
        "auth": true,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTkxMDI1NTAzLCJleHAiOjE1OTExMTE5MDN9.83zVANkAYIAF1QCpQuFq_3p6A33EKdPjIyLOrOFIsMg"
    }
          
 *     }
 *
 * @apiError UserNotFound  User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
    "status": "error",
    "message": "Cannot find User with the email vigneshprabhu@gmaili.com"
}
 */
router.post('/signin',UserController.signin);
/**
 * @api {post} /user/ add User information
 * @apiName AddUser information
 * @apiGroup User
 *


 *
 * @apiSuccess {String} fullname fullname of the User.
 * @apiSuccess {String} email  email of the User.
 * @apiSuccess {String} mobile  mobile of the User. 
 * @apiSuccess {String} password  password of the User.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "status": "success",
    "message": "User Added!",
    "data": {
        "id": 5,
        "fullname": "vp",
        "email": "vigneshprabhu@gmail.com",
        "mobile": "9597299278",
        "password": "vp@shine",
        "updatedAt": "2020-06-01T15:28:01.013Z",
        "createdAt": "2020-06-01T15:28:01.013Z"
    }
 *     }
 *
 * @apiError Cannotpost .
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannotpost"
 *     }
 */
router.post('/',[verfifysignup.verifyemail],  UserController.addUser);
/**
 * @api {get} /user/:id Request specific User information
 * @apiName GetUser
 * @apiGroup User
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id Users unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
    "message": "Found User",
    "data": {
        "id": 2,
        "fullname": "venkat",
        "email": "manojkumar11tpr@gmail.com",
        "mobile": "7708087463",
        "password": "manoj@11",
        "createdAt": "2020-05-30T21:15:12.186Z",
        "updatedAt": "2020-05-30T21:15:12.186Z"
    }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find User with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken], UserController.getAUser);
/**
* @api {put} /user/:id Update specific User information
 * @apiName UpdateUser information
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 *
 * @apiSuccess {String} fullname fullname of the User.
 * @apiSuccess {String} email  email of the User.
 * @apiSuccess {String} mobile  mobile of the User. 
 * @apiSuccess {String} password  password of the User.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "status": "success",
    "message": "User updated",
    "data": {
        "fullname": "vigneshprabhu",
        "email": "vigneshprabhu@gmail.com",
        "mobile": "9597299278",
        "password": "vp@shine"
    }

 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find User with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken], UserController.updatedUser);
/**
* @api {delete} /user/:id Delete specific User information
 * @apiName DeleteUser information
 * @apiGroup User
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "status": "success",
      "message": "User deleted"

 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find User with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],UserController.deleteUser);

export default router;