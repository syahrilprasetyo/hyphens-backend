import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import { dbConnection } from '../../../config/db_config';


export class MessagesTable extends Model<InferAttributes<MessagesTable>, InferCreationAttributes<MessagesTable>> {
  declare id: CreationOptional<number>;
  declare room_chat_id: CreationOptional<number>; 
  declare customer_id: CreationOptional<number | null>;
  declare dokter_id: CreationOptional<number | null >;
  declare message: CreationOptional<string>;
  declare is_seen: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

}

export async function setupMessagesTable() {
  MessagesTable.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      room_chat_id: {
        type: DataTypes.INTEGER,
      },
      customer_id: {
        type: DataTypes.INTEGER,
      },
      dokter_id: {
        type: DataTypes.INTEGER,
      },
      message: {
        type: DataTypes.STRING,
      },
      is_seen: {
        type: DataTypes.BOOLEAN
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
      tableName: 'messages_tb'
    }
  );

  MessagesTable.sync();
}
