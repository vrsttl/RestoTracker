// summary-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const summary = new Schema({
    table: [{ type: Schema.Types.Object }],
  }, {
    timestamps: true
  });

  return mongooseClient.model('summary', summary);
};
