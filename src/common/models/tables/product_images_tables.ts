import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class ProductImagesTable extends Model<InferAttributes<ProductImagesTable>, InferCreationAttributes<ProductImagesTable>> {
  declare id: CreationOptional<number>;
  declare product_id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare url: CreationOptional<string>;
  

}

export async function setupProductImagesTable() {
  ProductImagesTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'products_image_tb'
    }
  );

  ProductImagesTable.sync();
}
