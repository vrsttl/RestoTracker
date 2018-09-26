// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const orders = new Schema({
    items: [{ type: Schema.Types.Mixed }],
    closed: { type: Boolean, required: true, default: false, },
    summarized: { type: Boolean, required: true, default: false, },
    parent: { type: Number, required: true }
  }, {
      timestamps: true
    });

  return mongooseClient.model('orders', orders);
};
