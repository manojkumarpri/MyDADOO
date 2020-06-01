
import database from '../src/models';

class AdvertisementService {
  static async getAllAdvertisements() {
    try {
      return await database.Advertisement.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addAdvertisement(newAdvertisement) {
    try {
      return await database.Advertisement.create(newAdvertisement);
    } catch (error) {
      throw error;
    }
  }

  static async updateAdvertisement(id, updateAdvertisement) {
    try {
      const AdvertisementToUpdate = await database.Advertisement.findOne({
        where: { id: Number(id) }
      });

      if (AdvertisementToUpdate) {
        await database.Advertisement.update(updateAdvertisement, { where: { id: Number(id) } });

        return updateAdvertisement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAAdvertisement(id) {
    try {
      const theAdvertisement = await database.Advertisement.findOne({
        where: { id: Number(id) }
      });

      return theAdvertisement;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAdvertisement(id) {
    try {
      const AdvertisementToDelete = await database.Advertisement.findOne({ where: { id: Number(id) } });

      if (AdvertisementToDelete) {
        const deletedAdvertisement = await database.Advertisement.destroy({
          where: { id: Number(id) }
        });
        return deletedAdvertisement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default AdvertisementService;
