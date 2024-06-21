import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize, Association, NonAttribute } from 'sequelize';
import { dbConnection } from '../../../config/db_config';
import { ProductsTable } from './products_table';
import { ProductImagesTable } from './product_images_tables';


export class CartTable extends Model<InferAttributes<CartTable>, InferCreationAttributes<CartTable>> {
  declare id: CreationOptional<number>;
  declare customer_id: number;
  declare product_id: number;
  declare qty: number;
  declare status: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare product?: NonAttribute<ProductsTable>;
  declare product_name: NonAttribute<string>;
  declare regular_price: NonAttribute<string>;
  declare final_price: NonAttribute<string>;
  declare discount: NonAttribute<string>;

  declare imageProduct?: NonAttribute<ProductImagesTable>;
  declare url: NonAttribute<string>;

  
}

export async function setupCartTable() {
  CartTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      customer_id: {
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.INTEGER
      },
      qty: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')

      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'cart_tb'
    }
  );

  CartTable.sync();
}
