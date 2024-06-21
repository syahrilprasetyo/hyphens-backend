import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class BanksTable extends Model<InferAttributes<BanksTable>, InferCreationAttributes<BanksTable>> {
  declare id: CreationOptional<number>;
  declare bank_name: string;
  declare no_rek: string
  declare payment_fee: number
}

export async function setupBanksTable() {
  BanksTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      bank_name: {
        type: DataTypes.STRING
      },
      no_rek: {
        type: DataTypes.STRING
      },
      payment_fee: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'banks_tb'
    }
  );

  BanksTable.sync();
}
