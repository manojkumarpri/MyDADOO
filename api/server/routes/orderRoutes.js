import { Router } from 'express';
import OrderController from '../controllers/OrderController';
const authJwt = require('./verifyJwtToken');
const router = Router();
/**
 * @api {get} /order/ Request get all order information
 * @apiName GetAllorder
 * @apiGroup order
 *
  * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Orders retrieved",
    "data": [
        {
            "id": 1,
            "orderid": "id01",
            "orderDate": "2020-05-28T13:18:06.826Z",
            "time": "2:30am",
            "orderproductids": [
                1,
                2,
                3
            ],
            "orderproductnames": [
                "brinjal",
                "betruit",
                "onion"
            ],
            "orderproductunit": [
                "KG",
                "KG",
                "KG"
            ],
            "orderproductsize": [
                "500",
                "1",
                "2"
            ],
            "productprice": [
                45,
                50,
                75
            ],
            "totalamount": 1200,
            "orderproductcount": [
                2,
                4,
                6
            ],
            "userid": 1,
            "invoicenumber": "INTB3443333",
            "createdAt": "2020-05-28T13:36:57.578Z",
            "updatedAt": "2020-05-28T13:36:57.578Z"
        }
    ]
 *     }
 *
 * @apiError orderNotFound The order was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "orderNotFound"
 *     }
 */
router.get('/',[authJwt.verifyToken],OrderController.getAllOrders);
/**
 * @api {post} /order/ add order information
 * @apiName Addorder information
 * @apiGroup order
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 *

  * @apiSuccess {String} orderid  orderid of the order. 
 * @apiSuccess {DATE} orderDate  orderDate of the order.
 * @apiSuccess {String} time  time of the order.
 * @apiSuccess {array} orderproductids  orderproductids of the order.
 * @apiSuccess {array} orderproductnames  orderproductnames of the order.
  * @apiSuccess {array} orderproductunit  orderproductunit of the order.
   * @apiSuccess {array} orderproductsize  orderproductsize of the order.
   * @apiSuccess {array} productprice  productprice of the order.
 * @apiSuccess {String} totalamount  totalamount of the order.
 *@apiSuccess {array} orderproductcount  orderproductcount of the order.
 * @apiSuccess {integer} userid userid of the order.
  * @apiSuccess {String} invoicenumber invoicenumber of the product.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Order Added!",
    "data": {
        "id": 2,
        "orderid": "id02",
        "orderDate": "2020-05-28T13:18:06.826Z",
        "time": "1:30",
        "orderproductids": [
            1,
            2,
            3
        ],
        "orderproductnames": [
            "carrot",
            "brinjal",
            "betruit"
        ],
        "orderproductunit": [
            "KG",
            "KG",
            "KG"
        ],
        "orderproductsize": [
            "1",
            "3",
            "5"
        ],
        "productprice": [
            45,
            65,
            75
        ],
        "totalamount": 2333,
        "orderproductcount": [
            2,
            3,
            5
        ],
        "userid": 1,
        "invoicenumber": "INTB3443333",
        "updatedAt": "2020-06-01T19:33:40.435Z",
        "createdAt": "2020-06-01T19:33:40.435Z"
    }
 *     }
 *
 * @apiError orderNotFound The id of the order was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "orderNotFound"
 *     }
 */
router.post('/',[authJwt.verifyToken],OrderController.addOrder);
/**
 * @api {get} /order/:id Request specific order information
 * @apiName Getorder
 * @apiGroup order
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

 * @apiParam {Number} id order unique ID.
 *
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "status": "success",
    "message": "Found Order",
    "data": {
        "id": 2,
        "orderid": "id02",
        "orderDate": "2020-05-28T13:18:06.826Z",
        "time": "1:30",
        "orderproductids": [
            1,
            2,
            3
        ],
        "orderproductnames": [
            "carrot",
            "brinjal",
            "betruit"
        ],
        "orderproductunit": [
            "KG",
            "KG",
            "KG"
        ],
        "orderproductsize": [
            "1",
            "3",
            "5"
        ],
        "productprice": [
            45,
            65,
            75
        ],
        "totalamount": 2333,
        "orderproductcount": [
            2,
            3,
            5
        ],
        "userid": 1,
        "invoicenumber": "INTB3443333",
        "createdAt": "2020-06-01T19:33:40.435Z",
        "updatedAt": "2020-06-01T19:33:40.435Z"
    }
 *     }
 *
 * @apiError orderNotFound The id of the order was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error",
         "message": "Cannot find order with the id Number"
 *     }
 */
router.get('/:id',[authJwt.verifyToken],OrderController.getAOrder);
/**
* @api {put} /order/:id Update specific order information
 * @apiName Updateorder information
 * @apiGroup order
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *  @apiHeader {String} Content-Type application/x-www-form-urlencoded.

  *
  * @apiSuccess {String} orderid  orderid of the order. 
 * @apiSuccess {DATE} orderDate  orderDate of the order.
 * @apiSuccess {String} time  time of the order.
 * @apiSuccess {array} orderproductids  orderproductids of the order.
 * @apiSuccess {array} orderproductnames  orderproductnames of the order.
  * @apiSuccess {array} orderproductunit  orderproductunit of the order.
   * @apiSuccess {array} orderproductsize  orderproductsize of the order.
   * @apiSuccess {array} productprice  productprice of the order.
 * @apiSuccess {String} totalamount  totalamount of the order.
 *@apiSuccess {array} orderproductcount  orderproductcount of the order.
 * @apiSuccess {integer} userid userid of the order.
  * @apiSuccess {String} invoicenumber invoicenumber of the product.
 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "status": "success",
    "message": "Order updated",
    "data": {
        "orderid": "id02",
        "orderDate": "2020-05-28T13:18:06.826Z",
        "time": "1:30",
        "orderproductids": [
            "1",
            "2",
            "3"
        ],
        "orderproductnames": [
            "carrot",
            "brinjal",
            "betruit"
        ],
        "orderproductunit": [
            "KG",
            "KG",
            "KG"
        ],
        "orderproductsize": [
            "1",
            "3",
            "5"
        ],
        "productprice": [
            "45",
            "65",
            "75"
        ],
        "totalamount": "2333",
        "orderproductcount": [
            "2",
            "3",
            "5"
        ],
        "userid": "1",
        "invoicenumber": "INTB34433344"
    }
 *     }
 *
 * @apiError orderNotFound The id of the order was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
        "status": "error",
        "message": "Cannot find order with the id: 5"
      }
 */
router.put('/:id',[authJwt.verifyToken],OrderController.updatedOrder);
/**
* @api {delete} /order/:id Delete specific order information
 * @apiName Deleteorder information
 * @apiGroup order
 *
 * @apiHeader {String} x-access-token Users unique api-token.
  *@apiHeader {String} Content-Type application/x-www-form-urlencoded.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "status": "success",
    "message": "order deleted"
 }
 *
 * @apiError orderNotFound The id of the order was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
         "status": "error",
         "message": "order with the id 3 cannot be found"
      }
 */
router.delete('/:id',[authJwt.verifyToken],OrderController.deleteOrder);

export default router;