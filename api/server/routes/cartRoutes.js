import { Router } from 'express';
import CartController from '../controllers/CartController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /cart/ Request get all cart information
 * @apiName GetAllcart
 * @apiGroup cart
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
  "status": "success",
    "message": "Carts retrieved",
    "data": [
        {
            "id": 1,
            "userid": 1,
            "productids": [
                1,
                2,
                3
            ],
            "productnames": [
                "brinjal",
                "tomato",
                "beetruit"
            ],
            "productcounts": [
                2,
                2,
                6
            ],
            "productprice": [
                55,
                89,
                100
            ],
            "totalamount": 1233,
            "productunits": [
                "KG",
                "KG",
                "KG"
            ],
            "productsize": [
                "500",
                "3",
                "5"
            ],
            "imageurl": [
                "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
                "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528",
                "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
            ],
            "categoryids": [
                1,
                2,
                3
            ],
            "date": "2020-05-28T13:41:27.910Z",
            "time": "2:30am",
            "createdAt": "2020-05-28T13:51:43.662Z",
            "updatedAt": "2020-05-28T13:51:43.662Z"
        }
    ]
 *     }
 *
 * @apiError cartNotFound The cart was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "cartNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken], CartController.getAllCarts);
/**
 * @api {post} /cart/ add cart information
 * @apiName Addcart information
 * @apiGroup cart
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 * @apiSuccess {integer} userid userid of the cart.
 * @apiSuccess {array} productids  productids of the cart.
  * @apiSuccess {array} productnames  productnames of the cart.
  * @apiSuccess {array} productcounts  productcounts of the cart. 
 * @apiSuccess {array} productprice  productprice of the cart.
 * @apiSuccess {integer} totalamount  totalamount of the cart.
  * @apiSuccess {array} productunits  productunits of the cart.
  * @apiSuccess {array} productsize  productsize of the cart.
  * @apiSuccess {array} imageurl  imageurl of the cart.
  * @apiSuccess {array} categoryids  categoryids of the cart.
  * @apiSuccess {DATE} date  date of the cart.
   * @apiSuccess {String} time  time of the cart.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "status": "success",
    "message": "Cart Added!",
    "data": {
        "id": 2,
        "userid": 2,
        "productids": [
            1,
            2,
            3
        ],
        "productnames": [
            "brinjal",
            "tomato",
            "betruit"
        ],
        "productcounts": [
            2,
            1,
            3
        ],
        "productprice": [
            38,
            65,
            75
        ],
        "totalamount": 1233,
        "productunits": [
            "KG",
            "KG",
            "KG"
        ],
        "productsize": [
            "500",
            "4",
            "3"
        ],
        "imageurl": [
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg"
        ],
        "categoryids": [
            1,
            2,
            3
        ],
        "date": "2020-05-28T13:41:27.910Z",
        "time": "1:30",
        "updatedAt": "2020-06-01T20:47:34.699Z",
        "createdAt": "2020-06-01T20:47:34.699Z"
    }
 *     }
 *
 * @apiError cartNotFound The id of the cart was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "cartNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],CartController.addCart);
/**
 * @api {get} /cart/:id Request specific cart information
 * @apiName Getcart
 * @apiGroup cart
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id cart unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Found Cart",
    "data": {
        "id": 1,
        "userid": 1,
        "productids": [
            1,
            2,
            3
        ],
        "productnames": [
            "brinjal",
            "tomato",
            "beetruit"
        ],
        "productcounts": [
            2,
            2,
            6
        ],
        "productprice": [
            55,
            89,
            100
        ],
        "totalamount": 1233,
        "productunits": [
            "KG",
            "KG",
            "KG"
        ],
        "productsize": [
            "500",
            "3",
            "5"
        ],
        "imageurl": [
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528",
            "https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg"
        ],
        "categoryids": [
            1,
            2,
            3
        ],
        "date": "2020-05-28T13:41:27.910Z",
        "time": "2:30am",
        "createdAt": "2020-05-28T13:51:43.662Z",
        "updatedAt": "2020-05-28T13:51:43.662Z"
    }
 *     }
 *
 * @apiError cartNotFound The id of the cart was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find cart with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],CartController.getACart);
/**
* @api {put} /cart/:id Update specific cart information
 * @apiName Updatecart information
 * @apiGroup cart
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
  * @apiSuccess {integer} userid userid of the cart.
 * @apiSuccess {array} productids  productids of the cart.
  * @apiSuccess {array} productnames  productnames of the cart.
  * @apiSuccess {array} productcounts  productcounts of the cart. 
 * @apiSuccess {array} productprice  productprice of the cart.
 * @apiSuccess {integer} totalamount  totalamount of the cart.
  * @apiSuccess {array} productunits  productunits of the cart.
  * @apiSuccess {array} productsize  productsize of the cart.
  * @apiSuccess {array} imageurl  imageurl of the cart.
  * @apiSuccess {array} categoryids  categoryids of the cart.
  * @apiSuccess {DATE} date  date of the cart.
   * @apiSuccess {String} time  time of the cart.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Cart updated",
    "data": {
        "userid": "2",
        "productids": [
            "1",
            "2",
            "3"
        ],
        "productnames": [
            "brinjal",
            "tomatoo",
            "betruit"
        ],
        "productcounts": [
            "2",
            "1",
            "3"
        ],
        "productprice": [
            "38",
            "65",
            "75"
        ],
        "totalamount": "1233",
        "productunits": [
            "KG",
            "KG",
            "KG"
        ],
        "productsize": [
            "500",
            "4",
            "3"
        ],
        "imageurl": [
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg",
            "https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg"
        ],
        "categoryids": [
            "1",
            "2",
            "3"
        ],
        "date": "2020-05-28T13:41:27.910Z",
        "time": "1:30"
    }
 *     }
 *
 * @apiError cartNotFound The id of the cart was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find cart with the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],CartController.updatedCart);
/**
* @api {delete} /cart/:id Delete specific cart information
 * @apiName Deletecart information
 * @apiGroup cart
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "cart deleted"
 }
 *
 * @apiError cartNotFound The id of the cart was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "cart with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],CartController.deleteCart);

export default router;