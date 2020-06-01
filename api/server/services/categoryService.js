import database from '../src/models';

class CategoryService {
  static async getAllCategorys() {
    try {
      return await database.Category.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCategory(newCategory) {
    try {
      return await database.Category.create(newCategory);
    } catch (error) {
      throw error;
    }
  }

  static async updateCategory(id, updateCategory) {
    try {
      const CategoryToUpdate = await database.Category.findOne({
        where: { id: Number(id) }
      });

      if (CategoryToUpdate) {
        await database.Category.update(updateCategory, { where: { id: Number(id) } });

        return updateCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACategory(id) {
    try {
      const theCategory = await database.Category.findOne({
        where: { id: Number(id) }
      });

      return theCategory;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCategory(id) {
    try {
      const CategoryToDelete = await database.Category.findOne({ where: { id: Number(id) } });

      if (CategoryToDelete) {
        const deletedCategory = await database.Category.destroy({
          where: { id: Number(id) }
        });
        return deletedCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;