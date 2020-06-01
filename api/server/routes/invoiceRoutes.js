import { Router } from 'express';
import InvoiceController from '../controllers/InvoiceController';
const authJwt = require('./verifyJwtToken');
const router = Router();

router.get('/',[authJwt.verifyToken], InvoiceController.getAllInvoices);
router.post('/',[authJwt.verifyToken],InvoiceController.addInvoice);
router.get('/:id',[authJwt.verifyToken], InvoiceController.getAInvoice);
router.put('/:id',[authJwt.verifyToken], InvoiceController.updatedInvoice);
router.delete('/:id',[authJwt.verifyToken], InvoiceController.deleteInvoice);

export default router;