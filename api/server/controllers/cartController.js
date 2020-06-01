import CartService from '../services/CartService';
import Util from '../utils/Utils';

const util = new Util();

class CartController {
  static async getAllCarts(req, res) {
    try {
      const allCarts = await CartService.getAllCarts();
      if (allCarts.length > 0) {
        util.setSuccess(200, 'Carts retrieved', allCarts);
      } else {
        util.setSuccess(200, 'No Cart found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCart(req, res) {
    if (!req.body.productids || !req.body.imageurl || !req.body.totalamount) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newCart = req.body;
    try {
      const createdCart = await CartService.addCart(newCart);
      util.setSuccess(201, 'Cart Added!', createdCart);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedCart(req, res) {
    const alteredCart = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateCart = await CartService.updateCart(id, alteredCart);
      if (!updateCart) {
        util.setError(404, `Cannot find Cart with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Cart updated', updateCart);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACart(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theCart = await CartService.getACart(id);

      if (!theCart) {
        util.setError(404, `Cannot find Cart with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Cart', theCart);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteCart(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const CartToDelete = await CartService.deleteCart(id);

      if (CartToDelete) {
        util.setSuccess(200, 'Cart deleted');
      } else {
        util.setError(404, `Cart with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CartController;