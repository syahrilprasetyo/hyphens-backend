import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class DokterTable extends Model<InferAttributes<DokterTable>, InferCreationAttributes<DokterTable>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare username: string;
  declare email: string;
  declare password: string;
}

export async function setupDokterTable() {
  DokterTable.init(
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
     
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'dokter_tb'
    }
  );

  DokterTable.sync();
}
