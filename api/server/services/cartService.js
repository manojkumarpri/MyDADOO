import database from '../src/models';

class CartService {
  static async getAllCarts() {
    try {
      return await database.Cart.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCart(newCart) {
    try {
      return await database.Cart.create(newCart);
    } catch (error) {
      throw error;
    }
  }

  static async updateCart(id, updateCart) {
    try {
      const CartToUpdate = await database.Cart.findOne({
        where: { id: Number(id) }
      });

      if (CartToUpdate) {
        await database.Cart.update(updateCart, { where: { id: Number(id) } });

        return updateCart;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACart(id) {
    try {
      const theCart = await database.Cart.findOne({
        where: { id: Number(id) }
      });

      return theCart;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCart(id) {
    try {
      const CartToDelete = await database.Cart.findOne({ where: { id: Number(id) } });

      if (CartToDelete) {
        const deletedCart = await database.Cart.destroy({
          where: { id: Number(id) }
        });
        return deletedCart;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CartService;