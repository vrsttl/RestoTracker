// menuitem-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menuitem = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    costtomf: { type: Number, required: true },
  }, {
      timestamps: true
    });

  return mongooseClient.model('menuitem', menuitem);
};
