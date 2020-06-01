import { Router } from 'express';
import SubCategoryController from '../controllers/SubCategoryController';
const authJwt = require('./verifyJwtToken');
const verfifysignup = require('./verifysignup');
const router = Router();
/**
 * @api {get} /subcategory/ Request get all subcategory information
 * @apiName GetAllsubcategory
 * @apiGroup subcategory
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "SubCategorys retrieved",
    "data": [
        {
            "id": 1,
            "categoryid": 1,
            "subcategoryid": 1,
            "name": "fresh vegetables",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://cdn.britannica.com/s:800x450,c:crop/63/186963-138-AEE87658/vegetables.jpg",
            "createdAt": "2020-05-29T21:31:12.480Z",
            "updatedAt": "2020-05-29T21:31:12.480Z"
        }
    ]
 *     }
 *
 * @apiError subcategoryNotFound The subcategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "subcategoryNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken], SubCategoryController.getAllSubCategorys);
/**
 * @api {post} /subcategory/ add subcategory information
 * @apiName Addsubcategory information
 * @apiGroup subcategory
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} categoryid categoryid of the subcategory.
 * @apiSuccess {integer} subcategoryid  id of the subcategory.
 * @apiSuccess {String} name  name of the subcategory. 
 * @apiSuccess {integer} noofproducts  noofproducts of the subcategory.
 * @apiSuccess {array} productids  productids of the subcategory. 
 * @apiSuccess {String} imgurl  imgurl of the subcategory.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "status": "success",
    "message": "SubCategory Added!",
    "data": {
        "id": 10,
        "categoryid": 3,
        "subcategoryid": 4,
        "name": "gingertea",
        "noofproducts": 3,
        "productids": [
            1,
            2,
            3
        ],
        "imgurl": "https://5.imimg.com/data5/QV/TI/MY-64564025/ginger-tea-500x500.jpg",
        "updatedAt": "2020-06-01T17:26:36.680Z",
        "createdAt": "2020-06-01T17:26:36.680Z"
    }
 *     }
 *
 * @apiError subcategoryNotFound The id of the subcategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "subcategoryNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],SubCategoryController.addSubCategory);
/**
 * @api {get} /subcategory/:id Request specific subcategory information
 * @apiName Getsubcategory
 * @apiGroup subcategory
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id category unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     "status": "success",
    "message": "Found SubCategory",
    "data": [
        {
            "id": 1,
            "categoryid": 1,
            "subcategoryid": 1,
            "name": "fresh vegetables",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://cdn.britannica.com/s:800x450,c:crop/63/186963-138-AEE87658/vegetables.jpg",
            "createdAt": "2020-05-29T21:31:12.480Z",
            "updatedAt": "2020-05-29T21:31:12.480Z"
        },
        {
            "id": 2,
            "categoryid": 1,
            "subcategoryid": 2,
            "name": "Root vegetables",
            "noofproducts": 23,
            "productids": [
                1,
                2,
                3
            ],
            "imgurl": "https://www.tatacliq.com/que/wp-content/uploads/2020/04/shutterstock_1554474872-1.jpg",
            "createdAt": "2020-05-29T21:32:10.131Z",
            "updatedAt": "2020-05-29T21:32:10.131Z"
        }
    ]
 *     }
 *
 * @apiError subcategoryNotFound The id of the subcategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find subcategory with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],SubCategoryController.getASubCategory);
/**
* @api {put} /subcategory/:id Update specific subcategory information
 * @apiName Updatesubcategory information
 * @apiGroup subcategory
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} categoryid categoryid of the subcategory.
 * @apiSuccess {integer} subcategoryid  id of the subcategory.
 * @apiSuccess {String} name  name of the subcategory. 
 * @apiSuccess {integer} noofproducts  noofproducts of the subcategory.
 * @apiSuccess {array} productids  productids of the subcategory. 
 * @apiSuccess {String} imgurl  imgurl of the subcategory.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
    "message": "SubCategory updated",
    "data": {
        "categoryid": "3",
        "subcategoryid": "4",
        "name": "Gingertea",
        "noofproducts": "3",
        "productids": [
            "1",
            "2",
            "3"
        ],
        "imgurl": "https://5.imimg.com/data5/QV/TI/MY-64564025/ginger-tea-500x500.jpg"
    }

 *     }
 *
 * @apiError subcategoryNotFound The id of the subcategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find subcategory with the id: 2"
 *     }
 */
router.put('/:id',[authJwt.verifyToken],SubCategoryController.updatedSubCategory);
/**
* @api {delete} /subcategory/:id Delete specific subcategory information
 * @apiName Deletesubcategory information
 * @apiGroup subcategory
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "status": "success",
      "message": "subcategory deleted"

 *     }
 *
 * @apiError subcategoryNotFound The id of the subcategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "status": "error",
      "message": "Cannot find subcategory with the id: 2"
 *     }
 */
router.delete('/:id',[authJwt.verifyToken],SubCategoryController.deleteSubCategory);

export default router;