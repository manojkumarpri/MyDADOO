import AdvertisementService from '../services/AdvertisementService';
import Util from '../utils/Utils';

const util = new Util();

class AdvertisementController {
  static async getAllAdvertisements(req, res) {
    try {
      const allAdvertisements = await AdvertisementService.getAllAdvertisements();
      if (allAdvertisements.length > 0) {
        util.setSuccess(200, 'Advertisements retrieved', allAdvertisements);
      } else {
        util.setSuccess(200, 'No Advertisement found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addAdvertisement(req, res) {
    console.log("req.body.url"+req.body.url+"req.body.imageurl",req.body.imageurl+"req.body.expirytime"+req.body.expirytime)
    if (!req.body.url || !req.body.imageurl || !req.body.expirytime) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newAdvertisement = req.body;
    try {
      const createdAdvertisement = await AdvertisementService.addAdvertisement(newAdvertisement);
      util.setSuccess(201, 'Advertisement Added!', createdAdvertisement);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedAdvertisement(req, res) {
    const alteredAdvertisement = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateAdvertisement = await AdvertisementService.updateAdvertisement(id, alteredAdvertisement);
      if (!updateAdvertisement) {
        util.setError(404, `Cannot find Advertisement with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Advertisement updated', updateAdvertisement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAAdvertisement(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theAdvertisement = await AdvertisementService.getAAdvertisement(id);

      if (!theAdvertisement) {
        util.setError(404, `Cannot find Advertisement with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Advertisement', theAdvertisement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteAdvertisement(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const AdvertisementToDelete = await AdvertisementService.deleteAdvertisement(id);

      if (AdvertisementToDelete) {
        util.setSuccess(200, 'Advertisement deleted');
      } else {
        util.setError(404, `Advertisement with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default AdvertisementController;