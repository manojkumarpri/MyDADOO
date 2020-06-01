import database from '../src/models';

class SubCategoryService {
  static async getAllSubCategorys() {
    try {
      return await database.SubCategory.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addSubCategory(newSubCategory) {
    try {
      return await database.SubCategory.create(newSubCategory);
    } catch (error) {
      throw error;
    }
  }

  static async updateSubCategory(id, updateSubCategory) {
    try {
      const SubCategoryToUpdate = await database.SubCategory.findOne({
        where: { categoryid: Number(id) }
      });

      if (SubCategoryToUpdate) {
        await database.SubCategory.update(updateSubCategory, { where: { categoryid: Number(id) } });

        return updateSubCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getASubCategory(id) {
    try {
      const theSubCategory = await database.SubCategory.findAll({
        where: { categoryid: Number(id) }
      });

      return theSubCategory;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSubCategory(id) {
    try {
      const SubCategoryToDelete = await database.SubCategory.findOne({ where: { id: Number(id) } });

      if (SubCategoryToDelete) {
        const deletedSubCategory = await database.SubCategory.destroy({
          where: { categoryid: Number(id) }
        });
        return deletedSubCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default SubCategoryService;