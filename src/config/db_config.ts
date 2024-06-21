import { Sequelize } from "sequelize";
import { setupCommonTables, wiringCommonTableRelations } from "../common/models/tables/table_setup_config";

const mysql = require('mysql');

// Create a connection to the MySQL database
export const dbConnection = new Sequelize(
  'hyphensDB' ?? '',
  'root' ?? '',
  'thefepi2019',
  {
    host: 'localhost' ?? '',
    dialect: 'mysql',
    logging: false
  }
);


export async function setupAllTablesSetup() {
  try {
    await dbConnection.authenticate();
    console.log('Database Shopable has been establised succesfully.');
  } catch (error: any) {
    console.log('Unable to connect to the database Shopable:', error.message);
  }

  setupCommonTables()

  wiringCommonTableRelations()

}