"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("../registration/router");
const router_2 = require("../login2/router");
const router_3 = require("../cart/addToCart/router");
const router_4 = require("../checkout/router");
const router_5 = require("../order/router");
const router_6 = require("../cart/detail/router");
const router_7 = require("../checkout/detail/router");
const router_8 = require("../payments/router");
const router_9 = require("../product/router");
const router_10 = require("../address/router");
const router_11 = require("../message/router");
const router_12 = require("../loginAdminAndDokter/router");
const router_13 = require("../courier/courier_list/router");
const router_14 = require("../order/orderReceipt/router");
const router_15 = require("../preLoading/router");
const router_16 = require("../admin/router");
const router_17 = require("../multer/router");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs")); // Import the file system module
const products_table_1 = require("../common/models/tables/products_table");
const product_images_tables_1 = require("../common/models/tables/product_images_tables");
// Define the directory path
const uploadDir = './uploads';
// Check if the directory exists, if not, create it
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir);
}
exports.router = express_1.default.Router();
// Define storage for multer
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
// Initialize multer with defined storage
const upload = (0, multer_1.default)({ storage: storage });
// Use upload middleware for /Product/AddProduct endpoint
exports.router.use('/Admin/AddProduct', upload.single('image'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, description, discount, finalPrice, stock, isActive, regularPrice } = req.body;
    const imagePath = req.file ? req.file.path : null;
    // Basic validation
    if (!productName || !description || !discount || !finalPrice || !stock) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    const product = yield products_table_1.ProductsTable.create({
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
    yield product_images_tables_1.ProductImagesTable.create({
        product_id: product.id,
        url: imagePath !== null && imagePath !== void 0 ? imagePath : ""
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
}));
exports.router.use('/Registration', router_1.registrationRouter);
exports.router.use('/Login', router_2.loginnRouter);
exports.router.use('/LoginAdminDanDokter', router_12.loginDokterRouter);
exports.router.use('/AddToCart', router_3.addToCartRouter);
exports.router.use('/CartDetail', router_6.cartDetailRouter);
exports.router.use('/Checkout', router_4.checkoutRouter);
exports.router.use('/CheckoutDetail', router_7.checkoutDetailRouter);
exports.router.use('/BankList', router_8.paymentsRouter);
exports.router.use('/Order', router_5.orderRouter);
exports.router.use('/Product', router_9.productRouter);
exports.router.use('/Address', router_10.addressRouter);
exports.router.use('/Message', router_11.messageRouter);
exports.router.use('/Courier', router_13.courierListRouter);
exports.router.use('/OrderReceipt', router_14.orderReceiptRouter);
exports.router.use('/PreLoading', router_15.preLoadingRouter);
exports.router.use('/Admin', router_16.adminRouter);
exports.router.use('/UploadImage', router_17.uploadRouter);
