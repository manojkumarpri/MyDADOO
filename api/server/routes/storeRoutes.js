import { Router } from 'express';
import StoreController from '../controllers/StoreController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /store/ Request get all store information
 * @apiName GetAllstore
 * @apiGroup store
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "Stores retrieved",
    "data": [
        {
            "id": 1,
            "noofcategories": 22,
            "categoryids": [
                1,
                2,
                3
            ],
            "nooforders": 10,
            "name": " MYDADOO",
            "address": "chengalpet",
            "mobile": "7708087463",
            "createdAt": "2020-05-28T13:05:58.619Z",
            "updatedAt": "2020-05-28T13:05:58.619Z"
        }
    ]
 *     }
 *
 * @apiError storeNotFound The store was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "storeNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],StoreController.getAllStores);
/**
 * @api {post} /store/ add store information
 * @apiName Addstore information
 * @apiGroup store
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} noofcategories noofcategories of the store.
 * @apiSuccess {array} categoryids  categoryids of the store. 
 * @apiSuccess {integer} nooforders  nooforders of the store.
 * @apiSuccess {String} name  name of the store. 
 * @apiSuccess {String} address  address of the store.
 * @apiSuccess {String} mobile  mobile of the store.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "Store Added!",
    "data": {
        "id": 2,
        "noofcategories": 3,
        "categoryids": [
            1,
            2,
            3
        ],
        "nooforders": 10,
        "name": "MYDADOO",
        "address": "chengalpet",
        "mobile": "7708087463",
        "updatedAt": "2020-06-01T18:21:09.340Z",
        "createdAt": "2020-06-01T18:21:09.340Z"
    }
 *     }
 *
 * @apiError storeNotFound The id of the store was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "storeNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],StoreController.addStore);
/**
 * @api {get} /store/:id Request specific store information
 * @apiName Getstore
 * @apiGroup store
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id store unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "Found Store",
    "data": {
        "id": 1,
        "noofcategories": 22,
        "categoryids": [
            1,
            2,
            3
        ],
        "nooforders": 10,
        "name": " MYDADOO",
        "address": "chengalpet",
        "mobile": "7708087463",
        "createdAt": "2020-05-28T13:05:58.619Z",
        "updatedAt": "2020-05-28T13:05:58.619Z"
    }
 *     }
 *
 * @apiError storeNotFound The id of the store was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find store with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],StoreController.getAStore);
/**
* @api {put} /store/:id Update specific store information
 * @apiName Updatestore information
 * @apiGroup store
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} noofcategories noofcategories of the store.
 * @apiSuccess {array} categoryids  categoryids of the store. 
 * @apiSuccess {integer} nooforders  nooforders of the store.
 * @apiSuccess {String} name  name of the store. 
 * @apiSuccess {String} address  address of the store.
 * @apiSuccess {String} mobile  mobile of the store.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Store updated",
    "data": {
        "noofcategories": "3",
        "categoryids": [
            "1",
            "2",
            "3"
        ],
        "nooforders": "10",
        "name": "MYDADOO",
        "address": "chengalpetttt",
        "mobile": "7708087463"
    }
 *     }
 *
 * @apiError storeNotFound The id of the store was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find store with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],StoreController.updatedStore);
/**
* @api {delete} /store/:id Delete specific store information
 * @apiName Deletestore information
 * @apiGroup store
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "Store deleted"
 }
 *
 * @apiError storeNotFound The id of the store was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "Store with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],StoreController.deleteStore);

export default router; 