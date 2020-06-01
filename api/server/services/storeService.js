import database from '../src/models';

class StoreService {
  static async getAllStores() {
    try {
      return await database.Store.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addStore(newStore) {
    try {
      return await database.Store.create(newStore);
    } catch (error) {
      throw error;
    }
  }

  static async updateStore(id, updateStore) {
    try {
      const StoreToUpdate = await database.Store.findOne({
        where: { id: Number(id) }
      });

      if (StoreToUpdate) {
        await database.Store.update(updateStore, { where: { id: Number(id) } });

        return updateStore;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAStore(id) {
    try {
      const theStore = await database.Store.findOne({
        where: { id: Number(id) }
      });

      return theStore;
    } catch (error) {
      throw error;
    }
  }

  static async deleteStore(id) {
    try {
      const StoreToDelete = await database.Store.findOne({ where: { id: Number(id) } });

      if (StoreToDelete) {
        const deletedStore = await database.Store.destroy({
          where: { id: Number(id) }
        });
        return deletedStore;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default StoreService;