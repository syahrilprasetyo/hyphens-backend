import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class ProductsTable extends Model<InferAttributes<ProductsTable>, InferCreationAttributes<ProductsTable>> {
  declare id: CreationOptional<number>;
  declare product_name: CreationOptional<string>;
  declare regular_price: CreationOptional<string>;
  declare discount: CreationOptional<string>;
  declare final_price: CreationOptional<string>;
  declare image: CreationOptional<string>;
  declare qty: CreationOptional<number>;
  declare desc: CreationOptional<Text>;
  declare status: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

}

export async function setupProductsTable() {
  ProductsTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      product_name: {
        type: DataTypes.STRING
      },
      regular_price: {
        type: DataTypes.STRING
      },
      discount: {
        type: DataTypes.STRING
      },
      final_price: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      qty: {
        type: DataTypes.INTEGER
      },
      desc: {
        type: DataTypes.TEXT
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
      tableName: 'products_tb'
    }
  );

  ProductsTable.sync();
}
