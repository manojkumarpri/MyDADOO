import { Router } from 'express';
import AdvertisementController from '../controllers/AdvertisementController';
const authJwt = require('./verifyJwtToken');

const router = Router();
/**
 * @api {get} /advertisement/ Request get all advertisement information
 * @apiName GetAlladvertisement
 * @apiGroup advertisement
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Advertisements retrieved",
    "data": [
        {
            "id": 1,
            "url": "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg",
            "imageurl": [
                "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
            ],
            "expirytime": "2 hours",
            "createdAt": "2020-05-28T13:56:00.495Z",
            "updatedAt": "2020-05-28T13:56:00.495Z"
        }
    ]
 *     }
 *
 * @apiError advertisementNotFound The advertisement was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "advertisementNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],AdvertisementController.getAllAdvertisements);
/**
 * @api {post} /advertisement/ add advertisement information
 * @apiName Addadvertisement information
 * @apiGroup advertisement
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {String} url url of the advertisement.
 * @apiSuccess {array} imageurl  imageurl of the advertisement.
  * @apiSuccess {String} expirytime  expirytime of the advertisement.
   
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Advertisement Added!",
    "data": {
        "id": 2,
        "url": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg",
        "imageurl": [
            "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
        ],
        "expirytime": "3 hours",
        "updatedAt": "2020-06-01T21:02:24.437Z",
        "createdAt": "2020-06-01T21:02:24.437Z"
    }
 *     }
 *
 * @apiError advertisementNotFound The id of the advertisement was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "advertisementNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],AdvertisementController.addAdvertisement);
/**
 * @api {get} /advertisement/:id Request specific advertisement information
 * @apiName Getadvertisement
 * @apiGroup advertisement
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id advertisement unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Found Advertisement",
    "data": {
        "id": 2,
        "url": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg",
        "imageurl": [
            "\"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"",
            "\"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\""
        ],
        "expirytime": "3 hours",
        "createdAt": "2020-06-01T21:02:24.437Z",
        "updatedAt": "2020-06-01T21:02:24.437Z"
    }
 *     }
 *
 * @apiError advertisementNotFound The id of the advertisement was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find advertisement with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],AdvertisementController.getAAdvertisement);
/**
* @api {put} /advertisement/:id Update specific advertisement information
 * @apiName Updateadvertisement information
 * @apiGroup advertisement
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

* @apiSuccess {String} url url of the advertisement.
 * @apiSuccess {array} imageurl  imageurl of the advertisement.
  * @apiSuccess {String} expirytime  expirytime of the advertisement.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       "status": "success",
    "message": "Found Advertisement",
    "data": {
        "id": 2,
        "url": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg",
        "imageurl": [
            "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
        ],
        "expirytime": "3 hours",
        "createdAt": "2020-06-01T21:02:24.437Z",
        "updatedAt": "2020-06-01T21:08:49.831Z"
    }
 *     }
 *
 * @apiError advertisementNotFound The id of the advertisement was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find  advertisement the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],AdvertisementController.updatedAdvertisement);
/**
* @api {delete} /advertisement/:id Delete specific advertisement information
 * @apiName Deleteadvertisement information
 * @apiGroup advertisement
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "advertisement deleted"
 }
 *
 * @apiError advertisementNotFound The id of the advertisement was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "advertisement with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],AdvertisementController.deleteAdvertisement);

export default router;