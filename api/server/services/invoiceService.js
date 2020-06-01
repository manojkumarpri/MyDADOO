import database from '../src/models';

class InvoiceService {
  static async getAllInvoices() {
    try {
      return await database.Invoice.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addInvoice(newInvoice) {
    try {
      return await database.Invoice.create(newInvoice);
    } catch (error) {
      throw error;
    }
  }

  static async updateInvoice(id, updateInvoice) {
    try {
      const InvoiceToUpdate = await database.Invoice.findOne({
        where: { id: Number(id) }
      });

      if (InvoiceToUpdate) {
        await database.Invoice.update(updateInvoice, { where: { id: Number(id) } });

        return updateInvoice;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAInvoice(id) {
    try {
      const theInvoice = await database.Invoice.findOne({
        where: { id: Number(id) }
      });

      return theInvoice;
    } catch (error) {
      throw error;
    }
  }

  static async deleteInvoice(id) {
    try {
      const InvoiceToDelete = await database.Invoice.findOne({ where: { id: Number(id) } });

      if (InvoiceToDelete) {
        const deletedInvoice = await database.Invoice.destroy({
          where: { id: Number(id) }
        });
        return deletedInvoice;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default InvoiceService;