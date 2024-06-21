import { BanksTable } from "./bank_tables";
import { CartTable } from "./cart_table";
import { CustomersTable } from "./customer_table";
import { OrdersTable } from "./orders_table";
import { ProductsTable } from "./products_table";

// Associations

export function wiringTable() {
  OrdersTable.belongsTo(CustomersTable, { foreignKey: 'customer_id', as: 'customer' });
  OrdersTable.belongsTo(BanksTable, { foreignKey: 'payment_methode_id', as: 'bank' });

  CustomersTable.hasMany(OrdersTable, { foreignKey: 'customer_id', as: 'orders' });
  BanksTable.hasMany(OrdersTable, { foreignKey: 'payment_methode_id', as: 'orders' });
  ProductsTable.hasMany(OrdersTable, { foreignKey: 'checkout_id', as: 'orders' });




}
