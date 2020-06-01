import database from '../src/models';

class AddressService {
  static async getAllAddresss() {
    try {
      return await database.Address.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addAddress(newAddress) {
    try {
      return await database.Address.create(newAddress);
    } catch (error) {
      throw error;
    }
  }

  static async updateAddress(id, updateAddress) {
    try {
      const AddressToUpdate = await database.Address.findOne({
        where: { id: Number(id) }
      });

      if (AddressToUpdate) {
        await database.Address.update(updateAddress, { where: { id: Number(id) } });

        return updateAddress;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAAddress(id) {
    try {
      const theAddress = await database.Address.findOne({
        where: { id: Number(id) }
      });

      return theAddress;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAddress(id) {
    try {
      const AddressToDelete = await database.Address.findOne({ where: { id: Number(id) } });

      if (AddressToDelete) {
        const deletedAddress = await database.Address.destroy({
          where: { id: Number(id) }
        });
        return deletedAddress;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default AddressService;