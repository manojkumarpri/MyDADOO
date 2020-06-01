import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /category/ Request get all category information
 * @apiName GetAllcategory
 * @apiGroup category
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "Categorys retrieved",
    "data": [
        {
            "id": 1,
            "categoryid": 1,
            "name": "fresh vegetables",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ116GEbzM9mLD8xHjmNFqV8u8mvQxm9SbWkZt8K-c7pW6mAHaL&usqp=CAU",
            "createdAt": "2020-05-29T19:26:02.950Z",
            "updatedAt": "2020-05-29T19:26:02.950Z"
        },
        {
            "id": 2,
            "categoryid": 2,
            "name": "milk",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://www.motherjones.com/wp-content/uploads/milka2master.jpg?w=990",
            "createdAt": "2020-05-29T19:29:01.416Z",
            "updatedAt": "2020-05-29T19:29:01.416Z"
        },
        {
            "id": 3,
            "categoryid": 3,
            "name": "tea",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://www.twinings.co.uk/app_/responsive/TwiningsUKI/media/content/About-Tea/shutterstock_126275183.jpg?w=1260",
            "createdAt": "2020-05-29T19:30:27.039Z",
            "updatedAt": "2020-05-29T19:30:27.039Z"
        }
    ]
 *     }
 *
 * @apiError categoryNotFound The category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "categoryNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],CategoryController.getAllCategorys);
/**
 * @api {post} /category/ add category information
 * @apiName Addcategory information
 * @apiGroup category
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *

  * @apiSuccess {integer} categoryid  categoryid of the category. 
 * @apiSuccess {String} name  name of the category.
 * @apiSuccess {integer} noofproducts  noofproducts of the category.
 * @apiSuccess {array} productids  productids of the category.
 * @apiSuccess {String} imgurl  imgurl of the category.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Category Added!",
    "data": {
        "id": 4,
        "categoryid": 4,
        "name": "cooldrinks",
        "noofproducts": 5,
        "productids": [
            1,
            2,
            3
        ],
        "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg",
        "updatedAt": "2020-06-01T20:18:18.839Z",
        "createdAt": "2020-06-01T20:18:18.839Z"
    }
 *     }
 *
 * @apiError categoryNotFound The id of the category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "categoryNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],CategoryController.addCategory);
/**
 * @api {get} /category/:id Request specific category information
 * @apiName Getcategory
 * @apiGroup category
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id category unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "status": "success",
    "message": "Found Category",
    "data": {
        "id": 4,
        "categoryid": 4,
        "name": "cooldrinks",
        "noofproducts": 5,
        "productids": [
            1,
            2,
            3
        ],
        "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg",
        "createdAt": "2020-06-01T20:18:18.839Z",
        "updatedAt": "2020-06-01T20:18:18.839Z"
    }
 *     }
 *
 * @apiError categoryNotFound The id of the category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find category with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],CategoryController.getACategory);
/**
* @api {put} /category/:id Update specific category information
 * @apiName Updatecategory information
 * @apiGroup category
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
  * @apiSuccess {integer} categoryid  categoryid of the category. 
 * @apiSuccess {String} name  name of the category.
 * @apiSuccess {integer} noofproducts  noofproducts of the category.
 * @apiSuccess {array} productids  productids of the category.
 * @apiSuccess {String} imgurl  imgurl of the category.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Category updated",
    "data": {
        "categoryid": "4",
        "name": "Cooldrinks",
        "noofproducts": "5",
        "productids": [
            "1",
            "2",
            "3"
        ],
        "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg"
    }
 *     }
 *
 * @apiError categoryNotFound The id of the category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find category with the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],CategoryController.updatedCategory);
/**
* @api {delete} /category/:id Delete specific category information
 * @apiName Deletecategory information
 * @apiGroup category
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "category deleted"
 }
 *
 * @apiError categoryNotFound The id of the category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "category with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],CategoryController.deleteCategory);

export default router;