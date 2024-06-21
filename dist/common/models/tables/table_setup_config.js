"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wiringCommonTableRelations = exports.setupCommonTables = void 0;
const address_tables_1 = require("./address_tables");
const admin_table_1 = require("./admin_table");
const association_table_1 = require("./association_table");
const bank_tables_1 = require("./bank_tables");
const cart_table_1 = require("./cart_table");
const checkout_table_1 = require("./checkout_table");
const courier_table_1 = require("./courier_table");
const customer_table_1 = require("./customer_table");
const dokter_tables_1 = require("./dokter_tables");
const messages_table_1 = require("./messages_table");
const orders_table_1 = require("./orders_table");
const product_images_tables_1 = require("./product_images_tables");
const products_table_1 = require("./products_table");
const room_chat_table_1 = require("./room_chat_table");
function setupCommonTables() {
    (0, customer_table_1.setupCustomersTable)();
    (0, cart_table_1.setupCartTable)();
    (0, products_table_1.setupProductsTable)();
    (0, checkout_table_1.setupCheckoutTable)();
    (0, orders_table_1.setupOrdersTable)();
    (0, bank_tables_1.setupBanksTable)();
    (0, address_tables_1.setupAddressTable)();
    (0, room_chat_table_1.setupRoomChatTable)();
    (0, messages_table_1.setupMessagesTable)();
    (0, dokter_tables_1.setupDokterTable)();
    (0, product_images_tables_1.setupProductImagesTable)();
    (0, courier_table_1.setupCourierTable)();
    (0, admin_table_1.setupAdminTable)();
}
exports.setupCommonTables = setupCommonTables;
function wiringCommonTableRelations() {
    (0, association_table_1.wiringTable)();
}
exports.wiringCommonTableRelations = wiringCommonTableRelations;
