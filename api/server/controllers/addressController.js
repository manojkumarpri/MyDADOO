import AddressService from '../services/AddressService';
import Util from '../utils/Utils';

const util = new Util();

class AddressController {
  static async getAllAddresss(req, res) {
    try {
      const allAddresss = await AddressService.getAllAddresss();
      if (allAddresss.length > 0) {
        util.setSuccess(200, 'Addresss retrieved', allAddresss);
      } else {
        util.setSuccess(200, 'No Address found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addAddress(req, res) {
    if (!req.body.userid || !req.body.receivermobilenumber || !req.body.pincode) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newAddress = req.body;
    try {
      const createdAddress = await AddressService.addAddress(newAddress);
      util.setSuccess(201, 'Address Added!', createdAddress);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedAddress(req, res) {
    const alteredAddress = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateAddress = await AddressService.updateAddress(id, alteredAddress);
      if (!updateAddress) {
        util.setError(404, `Cannot find Address with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Address updated', updateAddress);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAAddress(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theAddress = await AddressService.getAAddress(id);

      if (!theAddress) {
        util.setError(404, `Cannot find Address with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Address', theAddress);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteAddress(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const AddressToDelete = await AddressService.deleteAddress(id);

      if (AddressToDelete) {
        util.setSuccess(200, 'Address deleted');
      } else {
        util.setError(404, `Address with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default AddressController;