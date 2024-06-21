import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class AddressTable extends Model<InferAttributes<AddressTable>, InferCreationAttributes<AddressTable>> {
  declare id: CreationOptional<number>;
  declare full_name: string;
  declare customer_id: number;
  declare email: string;
  declare no_telp: string;
  declare address: string; 
  declare city: string;
  declare country: string;
  declare zipCode: string;
}

export async function setupAddressTable() {
  AddressTable.init(
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
      email: {
        type: DataTypes.STRING
      },
      no_telp: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      full_name: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      zipCode: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'address_tb',
     
    }
  );

  AddressTable.sync();
}
