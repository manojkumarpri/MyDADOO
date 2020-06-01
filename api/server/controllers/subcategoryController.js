import SubCategoryService from '../services/SubCategoryService';
import Util from '../utils/Utils';

const util = new Util();

class SubCategoryController {
  static async getAllSubCategorys(req, res) {
    try {
      const allSubCategorys = await SubCategoryService.getAllSubCategorys();
      if (allSubCategorys.length > 0) {
        util.setSuccess(200, 'SubCategorys retrieved', allSubCategorys);
      } else {
        util.setSuccess(200, 'No SubCategory found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addSubCategory(req, res){
    
    if (!req.body.subcategoryid || !req.body.noofproducts || !req.body.productids) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newSubCategory = req.body;
    try {
      const createdSubCategory = await SubCategoryService.addSubCategory(newSubCategory);
      util.setSuccess(201, 'SubCategory Added!', createdSubCategory);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedSubCategory(req, res) {
    const alteredSubCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateSubCategory = await SubCategoryService.updateSubCategory(id, alteredSubCategory);
      if (!updateSubCategory) {
        util.setError(404, `Cannot find SubCategory with the id: ${id}`);
      } else {
        util.setSuccess(200, 'SubCategory updated', updateSubCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getASubCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theSubCategory = await SubCategoryService.getASubCategory(id);

      if (!theSubCategory) {
        util.setError(404, `Cannot find SubCategory with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found SubCategory', theSubCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteSubCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const SubCategoryToDelete = await SubCategoryService.deleteSubCategory(id);

      if (SubCategoryToDelete) {
        util.setSuccess(200, 'SubCategory deleted');
      } else {
        util.setError(404, `SubCategory with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default SubCategoryController;