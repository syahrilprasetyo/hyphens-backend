import { Op } from "sequelize";
import { ProductsTable } from "../../common/models/tables/products_table";
import { ProductImagesTable } from "../../common/models/tables/product_images_tables";
import multer from 'multer';

type Payload = {
  productName: string;
  description: string;
  discount: string;
  finalPrice: number;
  stock: number;
  isActive: string;
  image: string; // Change the type to Express.Multer.File for file upload
  user?: {
    userId: number;
  };
};

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage });

export default async function productListService(payload: Payload) {
  const { productName, description, discount, finalPrice, stock, isActive, image } = payload;

  try {
    // Save product data to the database
    const product = await ProductsTable.create({
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
      await ProductImagesTable.create({
        product_id: product.id,
        url: imagePath
      });
    }

    return {
      success: true,
      message: 'Product created successfully.'
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      success: false,
      message: 'Failed to create product.'
    };
  }
}
