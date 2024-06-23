import Express from 'express';
import { registrationRouter } from '../registration/router';
import { loginnRouter } from '../login2/router';
import { addToCartRouter } from '../cart/addToCart/router';
import { checkoutRouter } from '../checkout/router';
import { orderRouter } from '../order/router';
import { cartDetailRouter } from '../cart/detail/router';
import { checkoutDetailRouter } from '../checkout/detail/router';
import { paymentsRouter } from '../payments/router';
import { productRouter } from '../product/router';
import { addressRouter } from '../address/router';
import { messageRouter } from '../message/router';
import { loginDokterRouter } from '../loginAdminAndDokter/router';
import { courierListRouter } from '../courier/courier_list/router';
import { orderReceiptRouter } from '../order/orderReceipt/router';
import { preLoadingRouter } from '../preLoading/router';
import { adminRouter } from '../admin/router';
import { uploadRouter } from '../multer/router';
import multer from 'multer';
import path from 'path';

import fs from 'fs'; // Import the file system module
import { ProductsTable } from '../common/models/tables/products_table';
import { ProductImagesTable } from '../common/models/tables/product_images_tables';

// Define the directory path
const uploadDir = './uploads';

// Check if the directory exists, if not, create it
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


export const router = Express.Router();


// Define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer with defined storage
const upload = multer({ storage: storage });

// Use upload middleware for /Product/AddProduct endpoint
router.use('/Admin/AddProduct', upload.single('image'), async (req, res, next) => {
  const { productName, description, discount, finalPrice, stock, isActive, regularPrice } = req.body;
  const imagePath = "http://localhost:8000/images/"+ req.file?.filename;

  // Basic validation
  if (!productName || !description || !discount || !finalPrice || !stock) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const product =await ProductsTable.create({
    product_name: productName,
    regular_price: regularPrice,
    desc: description, // Use description directly
    discount: discount,
    final_price: String(finalPrice),
    qty: stock,
    status: isActive == "true" ? "Active" : "",
  });

  // Handle file upload
 
   // Define the path where the image will be stored
    // Save image information to the database or perform any other necessary actions
    // For example:
    await ProductImagesTable.create({
      product_id: product.id,
      url: imagePath ?? ""
    });
  

  // Save data to database or perform other actions
  // For simplicity, let's just log the data for now
  console.log('Received data:');
  console.log('Product Name:', productName);
  console.log('Description:', description);
  console.log('Discount:', discount);
  console.log('Final Price:', finalPrice);
  console.log('Stock:', stock);
  console.log('Is Active:', isActive);
  console.log('Image Path:', imagePath);

  res.status(200).json({ message: 'Product added successfully.' });
});


router.use('/Registration', registrationRouter);
router.use('/Login', loginnRouter);
router.use('/LoginAdminDanDokter', loginDokterRouter);
router.use('/AddToCart', addToCartRouter);
router.use('/CartDetail', cartDetailRouter);
router.use('/Checkout', checkoutRouter);
router.use('/CheckoutDetail', checkoutDetailRouter);
router.use('/BankList', paymentsRouter);
router.use('/Order', orderRouter);
router.use('/Product', productRouter);
router.use('/Address', addressRouter);
router.use('/Message', messageRouter);
router.use('/Courier', courierListRouter)
router.use('/OrderReceipt', orderReceiptRouter)
router.use('/PreLoading', preLoadingRouter)
router.use('/Admin', adminRouter)
router.use('/UploadImage', uploadRouter)






