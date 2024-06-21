import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class RoomChatTable extends Model<InferAttributes<RoomChatTable>, InferCreationAttributes<RoomChatTable>> {
  declare id: CreationOptional<number>;
  declare dokter_id: CreationOptional<number >;
  declare customer_id: CreationOptional<number>;
  declare is_active: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

}

export async function setupRoomChatTable() {
  RoomChatTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      dokter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      is_active: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize: dbConnection,
      timestamps: false,
      tableName: 'room_chat_tb'
    }
  );

  RoomChatTable.sync();
}
