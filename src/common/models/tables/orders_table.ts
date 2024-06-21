import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize, NonAttribute, Association } from 'sequelize';
import { dbConnection } from '../../../config/db_config';
import { CustomersTable } from './customer_table';
import { BanksTable } from './bank_tables';


export class OrdersTable extends Model<InferAttributes<OrdersTable>, InferCreationAttributes<OrdersTable>> {
  declare id: CreationOptional<number>;
  declare customer_id: number;
  declare checkout_id: number;
  declare payment_methode_id: number;
  declare order_status: CreationOptional<string>;
  declare total_payment: CreationOptional<number>;
  declare exp_date: CreationOptional<Date>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare name: NonAttribute<string>;
  declare email: NonAttribute<string>;
  declare phone_number: NonAttribute<string>;
  declare bank_name: NonAttribute<string>;

  declare static associations: {
    customer: Association<OrdersTable, CustomersTable>;
    bank: Association<OrdersTable, BanksTable>;
  };
  

}

export async function setupOrdersTable() {
  OrdersTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      checkout_id: {
        type: DataTypes.INTEGER,
      },
      payment_methode_id: {
        type: DataTypes.INTEGER,
      },
      order_status: {
        type: DataTypes.STRING,
      },
      total_payment: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      customer_id: {
        type: DataTypes.INTEGER
      },
      exp_date: {
        type: DataTypes.DATE,
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'orders_tb'
    }
  );

  OrdersTable.sync();
}
