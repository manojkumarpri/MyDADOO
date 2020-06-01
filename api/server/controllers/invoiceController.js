import InvoiceService from '../services/InvoiceService';
import Util from '../utils/Utils';

const util = new Util();

class InvoiceController {
  static async getAllInvoices(req, res) {
    try {
      const allInvoices = await InvoiceService.getAllInvoices();
      if (allInvoices.length > 0) {
        util.setSuccess(200, 'Invoices retrieved', allInvoices);
      } else {
        util.setSuccess(200, 'No Invoice found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addInvoice(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newInvoice = req.body;
    try {
      const createdInvoice = await InvoiceService.addInvoice(newInvoice);
      util.setSuccess(201, 'Invoice Added!', createdInvoice);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedInvoice(req, res) {
    const alteredInvoice = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateInvoice = await InvoiceService.updateInvoice(id, alteredInvoice);
      if (!updateInvoice) {
        util.setError(404, `Cannot find Invoice with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Invoice updated', updateInvoice);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAInvoice(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theInvoice = await InvoiceService.getAInvoice(id);

      if (!theInvoice) {
        util.setError(404, `Cannot find Invoice with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Invoice', theInvoice);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteInvoice(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const InvoiceToDelete = await InvoiceService.deleteInvoice(id);

      if (InvoiceToDelete) {
        util.setSuccess(200, 'Invoice deleted');
      } else {
        util.setError(404, `Invoice with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default InvoiceController;