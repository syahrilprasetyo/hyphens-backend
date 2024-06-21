import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class CheckoutTable extends Model<InferAttributes<CheckoutTable>, InferCreationAttributes<CheckoutTable>> {
  declare id: CreationOptional<number>;
  declare customer_id: number;
  declare cart_ids: CreationOptional<string>;
  declare receiver_id: CreationOptional<number | null>;
  declare courier_id: CreationOptional<number | null>;
  declare total_amount: CreationOptional<string>;
  declare address_id: CreationOptional<number>;
  declare status: CreationOptional<string>;
}

export async function setupCheckoutTable() {
  CheckoutTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      customer_id: {
        type: DataTypes.INTEGER,
      },
      cart_ids: {
        type: DataTypes.STRING,
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      courier_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      total_amount: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'checkout_tb'
    }
  );

  CheckoutTable.sync();
}
