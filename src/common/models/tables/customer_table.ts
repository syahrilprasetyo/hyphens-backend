import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class CustomersTable extends Model<InferAttributes<CustomersTable>, InferCreationAttributes<CustomersTable>> {
  declare id: CreationOptional<number>;
  declare username: CreationOptional<string>;
  declare email: CreationOptional<string>;
  declare phone_number: CreationOptional<string>;
  declare password: CreationOptional<string>;
  declare name: CreationOptional<string>;
  declare imageUrl: CreationOptional<string>
}

export async function setupCustomersTable() {
  CustomersTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'customers_tb'
    }
  );

  CustomersTable.sync();
}
