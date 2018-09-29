const orders = require('./orders/orders.service.js');
const menuitem = require('./menuitem/menuitem.service.js');
const users = require('./users/users.service.js');
const tables = require('./tables/tables.service.js');
const summary = require('./summary/summary.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(orders);
  app.configure(menuitem);
  app.configure(users);
  app.configure(tables);
  app.configure(summary);
};
