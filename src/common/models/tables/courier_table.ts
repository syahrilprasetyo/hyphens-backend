import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class CourierTable extends Model<InferAttributes<CourierTable>, InferCreationAttributes<CourierTable>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare time: string;
  declare price: number;

}

export async function setupCourierTable() {
  CourierTable.init(
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
      time: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'courier_tb'
    }
  );

  CourierTable.sync();
}
