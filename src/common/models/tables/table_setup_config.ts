import { setupAddressTable } from "./address_tables";
import { setupAdminTable } from "./admin_table";
import { wiringTable } from "./association_table";
import { setupBanksTable } from "./bank_tables";
import { setupCartTable } from "./cart_table";
import { setupCheckoutTable } from "./checkout_table";
import { setupCourierTable } from "./courier_table";
import { setupCustomersTable } from "./customer_table";
import { setupDokterTable } from "./dokter_tables";
import { setupMessagesTable } from "./messages_table";
import { setupOrdersTable } from "./orders_table";
import { setupProductImagesTable } from "./product_images_tables";
import { setupProductsTable } from "./products_table";
import {  setupRoomChatTable } from "./room_chat_table";

export function setupCommonTables() {
  setupCustomersTable()
  setupCartTable()
  setupProductsTable()
  setupCheckoutTable()
  setupOrdersTable()
  setupBanksTable()
  setupAddressTable()
  setupRoomChatTable()
  setupMessagesTable()
  setupDokterTable()
  setupProductImagesTable()
  setupCourierTable()
  setupAdminTable()
}


export function wiringCommonTableRelations() {
  wiringTable()
}
