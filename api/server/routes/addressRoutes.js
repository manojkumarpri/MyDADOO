import { Router } from 'express';
import AddressController from '../controllers/AddressController';
const authJwt = require('./verifyJwtToken');

const router = Router();
/**
 * @api {get} /address/ Request get all address information
 * @apiName GetAlladdress
 * @apiGroup address
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
   "status": "success",
    "message": "Addresss retrieved",
    "data": [
        {
            "id": 1,
            "userid": 1,
            "receivername": "manoj",
            "receivermobilenumber": "7708087463",
            "address": "chengalpet doorno 5",
            "district": "chengalpet",
            "pincode": 60038,
            "createdAt": "2020-05-28T14:05:36.981Z",
            "updatedAt": "2020-05-28T14:05:36.981Z"
        }
    ]
 *     }
 *
 * @apiError addressNotFound The address was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "addressNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],AddressController.getAllAddresss);
/**
 * @api {post} /address/ add address information
 * @apiName Addaddress information
 * @apiGroup address
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} userid userid of the address.
 * @apiSuccess {String} receivername  receivername of the address.
  * @apiSuccess {String} receivermobilenumber  receivermobilenumber of the address.
  * @apiSuccess {String} address  address of the address.
 * @apiSuccess {String} district  district of the address.
  * @apiSuccess {integer} pincode pincode of the address.

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       "status": "success",
    "message": "Address Added!",
    "data": {
        "id": 2,
        "userid": 2,
        "receivername": "venkat",
        "receivermobilenumber": "7708087463",
        "address": "tiruppur",
        "district": "tiruppur",
        "pincode": 641666,
        "updatedAt": "2020-06-01T21:32:50.114Z",
        "createdAt": "2020-06-01T21:32:50.114Z"
    }
 *     }
 *
 * @apiError addressNotFound The id of the address was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "addressNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],AddressController.addAddress);
/**
 * @api {get} /address/:id Request specific address information
 * @apiName Getaddress
 * @apiGroup address
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id address unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    
    "status": "success",
    "message": "Found Address",
    "data": {
        "id": 1,
        "userid": 1,
        "receivername": "manoj",
        "receivermobilenumber": "7708087463",
        "address": "chengalpet doorno 5",
        "district": "chengalpet",
        "pincode": 60038,
        "createdAt": "2020-05-28T14:05:36.981Z",
        "updatedAt": "2020-05-28T14:05:36.981Z"
    }
 *     }
 *
 * @apiError addressNotFound The id of the address was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find address with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],AddressController.getAAddress);
/**
* @api {put} /address/:id Update specific address information
 * @apiName Updateaddress information
 * @apiGroup address
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiSuccess {integer} userid userid of the address.
 * @apiSuccess {String} receivername  receivername of the address.
  * @apiSuccess {String} receivermobilenumber  receivermobilenumber of the address.
  * @apiSuccess {String} address  address of the address.
 * @apiSuccess {String} district  district of the address.
  * @apiSuccess {integer} pincode pincode of the address.
  * 
  * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Address updated",
    "data": {
        "userid": "2",
        "receivername": "Venkat",
        "receivermobilenumber": "7708087463",
        "address": "tiruppur",
        "district": "tiruppur",
        "pincode": "641666"
    }
 *     }
 *
 * @apiError addressNotFound The id of the address was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find  address the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],AddressController.updatedAddress);
/**
* @api {delete} /address/:id Delete specific address information
 * @apiName Deleteaddress information
 * @apiGroup address
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "address deleted"
 }
 *
 * @apiError addressNotFound The id of the address was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "address with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],AddressController.deleteAddress);

export default router;