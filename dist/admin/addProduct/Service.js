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
const products_table_1 = require("../../common/models/tables/products_table");
const product_images_tables_1 = require("../../common/models/tables/product_images_tables");
const multer_1 = __importDefault(require("multer"));
// Multer configuration for file upload
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    }
});
const upload = (0, multer_1.default)({ storage: storage });
function productListService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { productName, description, discount, finalPrice, stock, isActive, image } = payload;
        try {
            // Save product data to the database
            const product = yield products_table_1.ProductsTable.create({
                product_name: productName,
                desc: new Text(description), // Use description directly
                discount: discount,
                final_price: String(finalPrice),
                qty: stock,
                status: isActive,
            });
            // Handle file upload
            if (image) {
                const imagePath = 'uploads/' + image; // Define the path where the image will be stored
                // Save image information to the database or perform any other necessary actions
                // For example:
                yield product_images_tables_1.ProductImagesTable.create({
                    product_id: product.id,
                    url: imagePath
                });
            }
            return {
                success: true,
                message: 'Product created successfully.'
            };
        }
        catch (error) {
            console.error('Error creating product:', error);
            return {
                success: false,
                message: 'Failed to create product.'
            };
        }
    });
}
exports.default = productListService;
