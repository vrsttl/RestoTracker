// Initializes the `summary` service on path `/summary`
const createService = require('feathers-mongoose');
const createModel = require('../../models/summary.model');
const hooks = require('./summary.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/summary', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('summary');

  service.hooks(hooks);
};
