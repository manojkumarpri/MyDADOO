import StoreService from '../services/StoreService';
import Util from '../utils/Utils';

const util = new Util();

class StoreController {
  static async getAllStores(req, res) {
    try {
      const allStores = await StoreService.getAllStores();
      if (allStores.length > 0) {
        util.setSuccess(200, 'Stores retrieved', allStores);
      } else {
        util.setSuccess(200, 'No Store found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addStore(req, res) {
    if (!req.body.categoryids || !req.body.name || !req.body.address) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newStore = req.body;
    try {
      const createdStore = await StoreService.addStore(newStore);
      util.setSuccess(201, 'Store Added!', createdStore);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedStore(req, res) {
    const alteredStore = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateStore = await StoreService.updateStore(id, alteredStore);
      if (!updateStore) {
        util.setError(404, `Cannot find Store with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Store updated', updateStore);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAStore(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theStore = await StoreService.getAStore(id);

      if (!theStore) {
        util.setError(404, `Cannot find Store with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Store', theStore);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteStore(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const StoreToDelete = await StoreService.deleteStore(id);

      if (StoreToDelete) {
        util.setSuccess(200, 'Store deleted');
      } else {
        util.setError(404, `Store with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default StoreController;