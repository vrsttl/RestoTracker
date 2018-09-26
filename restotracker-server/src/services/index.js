const orders = require('./orders/orders.service.js');
const menuitem = require('./menuitem/menuitem.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(orders);
  app.configure(menuitem);
};
