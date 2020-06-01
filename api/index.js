import express from 'express';
import bodyParser from 'body-parser';
import addressRoutes from './server/routes/addressRoutes';
import advertisementRoutes from './server/routes/advertisementRoutes';
import cartRoutes from './server/routes/cartRoutes';
import categoryRoutes from './server/routes/categoryRoutes';
import invoiceRoutes from './server/routes/invoiceRoutes';
import orderRoutes from './server/routes/orderRoutes';
import productRoutes from './server/routes/productRoutes';
import storeRoutes from './server/routes/storeRoutes';
import userRoutes from './server/routes/userRoutes';
import subcategoryRoutes from './server/routes/subcategoryRoutes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/apidoc'))
const port = process.env.PORT || 8001;


// when a random route is inputed
//Routes
app.use('/api/v1/address', addressRoutes);
app.use('/api/v1/advertisement', advertisementRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/invoice', invoiceRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/store', storeRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/subcategory',subcategoryRoutes);

console.log("__dirname"+root);
app.use('/apidoc', function(req, res) {
  res.sendFile(root+'/public/apidoc/index.html');
});
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to DoorDaa API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;