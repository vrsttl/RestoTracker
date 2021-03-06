// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    items: [{ type: Schema.Types.Mixed }],
  }, {
      timestamps: true
    });

  return mongooseClient.model('orders', orders);
};
