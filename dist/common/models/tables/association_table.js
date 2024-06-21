"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wiringTable = void 0;
const bank_tables_1 = require("./bank_tables");
const cart_table_1 = require("./cart_table");
const customer_table_1 = require("./customer_table");
const orders_table_1 = require("./orders_table");
const products_table_1 = require("./products_table");
// Associations
function wiringTable() {
    orders_table_1.OrdersTable.belongsTo(customer_table_1.CustomersTable, { foreignKey: 'customer_id', as: 'customer' });
    orders_table_1.OrdersTable.belongsTo(bank_tables_1.BanksTable, { foreignKey: 'payment_methode_id', as: 'bank' });
    customer_table_1.CustomersTable.hasMany(orders_table_1.OrdersTable, { foreignKey: 'customer_id', as: 'orders' });
    bank_tables_1.BanksTable.hasMany(orders_table_1.OrdersTable, { foreignKey: 'payment_methode_id', as: 'orders' });
    products_table_1.ProductsTable.hasMany(orders_table_1.OrdersTable, { foreignKey: 'checkout_id', as: 'orders' });
    // CartTable association with alias 'Products'
    cart_table_1.CartTable.hasMany(products_table_1.ProductsTable, { foreignKey: 'product_id', as: 'Products' });
    // ProductsTable association with alias 'Cart'
    products_table_1.ProductsTable.belongsTo(cart_table_1.CartTable, { foreignKey: 'product_id', as: 'Cart' });
}
exports.wiringTable = wiringTable;
