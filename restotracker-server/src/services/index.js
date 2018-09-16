const neworder = require('./neworder/neworder.service.js');
const orders = require('./orders/orders.service.js');
const menu = require('./menu/menu.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(neworder);
  app.configure(orders);
  app.configure(menu);
};
