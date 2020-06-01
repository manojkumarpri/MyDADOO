import { Router } from 'express';
import ProductController from '../controllers/ProductController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /product/ Request get all product information
 * @apiName GetAllproduct
 * @apiGroup product
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
   "status": "success",
    "message": "Products retrieved",
    "data": [
        {
            "id": 1,
            "productid": 1,
            "name": "Brinjal",
            "categoryid": 1,
            "price": 45,
            "size": "500",
            "unit": "KG",
            "description": "good organic product",
            "image": "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "createdAt": "2020-05-28T13:18:06.826Z",
            "updatedAt": "2020-05-28T13:18:06.826Z"
        },
        {
            "id": 2,
            "productid": 2,
            "name": "carrot",
            "categoryid": 2,
            "price": 65,
            "size": "1",
            "unit": "KG",
            "description": "The carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious",
            "image": "https://femina.wwmindia.com/content/2019/dec/nutrition-benefits-of-carrots.jpg",
            "createdAt": "2020-05-30T13:50:45.548Z",
            "updatedAt": "2020-05-30T13:50:45.548Z"
        }
    ]
 *     }
 *
 * @apiError productNotFound The product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "productNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken], ProductController.getAllProducts);
/**
 * @api {post} /product/ add product information
 * @apiName Addproduct information
 * @apiGroup product
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} productid productid of the product.
  * @apiSuccess {String} name  name of the product. 
 * @apiSuccess {integer} categoryid  categoryid of the product.
 * @apiSuccess {integer} price  price of the product.
 * @apiSuccess {String} size  size of the product.
 * @apiSuccess {String} unit  unit of the product.
 * @apiSuccess {String} description  description of the product.
 *@apiSuccess {String} image  image of the product.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
   "status": "success",
    "message": "Product Added!",
    "data": {
        "id": 3,
        "productid": 3,
        "name": "tomato",
        "categoryid": 1,
        "price": 65,
        "size": "3",
        "unit": "KG",
        "description": "The fruit is a fleshy berry, usually of red colour, although there are also pink or yellow tomatoes.",
        "image": "https://www.greenmylife.in/wp-content/uploads/2016/07/GMLHLSD127_New.jpg",
        "updatedAt": "2020-06-01T19:09:22.129Z",
        "createdAt": "2020-06-01T19:09:22.129Z"
    }
 *     }
 *
 * @apiError productNotFound The id of the product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "productNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken], ProductController.addProduct);
/**
 * @api {get} /product/:id Request specific product information
 * @apiName Getproduct
 * @apiGroup product
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id product unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "status": "success",
    "message": "Found Product",
    "data": {
        "id": 1,
        "productid": 1,
        "name": "Brinjal",
        "categoryid": 1,
        "price": 45,
        "size": "500",
        "unit": "KG",
        "description": "good organic product",
        "image": "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
        "createdAt": "2020-05-28T13:18:06.826Z",
        "updatedAt": "2020-05-28T13:18:06.826Z"
    }
 *     }
 *
 * @apiError productNotFound The id of the product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find product with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],ProductController.getAProduct);
/**
* @api {put} /product/:id Update specific product information
 * @apiName Updateproduct information
 * @apiGroup product
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
 * @apiSuccess {integer} productid productid of the product.
  * @apiSuccess {String} name  name of the product. 
 * @apiSuccess {integer} categoryid  categoryid of the product.
 * @apiSuccess {integer} price  price of the product.
 * @apiSuccess {String} size  size of the product.
 * @apiSuccess {String} unit  unit of the product.
 * @apiSuccess {String} description  description of the product.
 *@apiSuccess {String} image  image of the product.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "status": "success",
    "message": "Product updated",
    "data": {
        "productid": "2",
        "name": "carrot",
        "categoryid": "1",
        "price": "65",
        "size": "2",
        "unit": "KG",
        "description": "The carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious",
        "image": "https://femina.wwmindia.com/content/2019/dec/nutrition-benefits-of-carrots.jpg"
    }
 *     }
 *
 * @apiError ProductNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find Product with the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],ProductController.updatedProduct);
/**
* @api {delete} /product/:id Delete specific product information
 * @apiName Deleteproduct information
 * @apiGroup product
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "product deleted"
 }
 *
 * @apiError productNotFound The id of the product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "product with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken], ProductController.deleteProduct);

export default router;