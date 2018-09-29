// tables-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tables = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.Mixed }],
    currentconsumption: { type: Number, required: true, default: 0 },
  }, {
      timestamps: true
    });

  return mongooseClient.model('tables', tables);
};
