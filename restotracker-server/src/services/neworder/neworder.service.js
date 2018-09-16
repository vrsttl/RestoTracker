// Initializes the `neworder` service on path `/neworder`
const createService = require('feathers-mongoose');
const createModel = require('../../models/neworder.model');
const hooks = require('./neworder.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/neworder', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('neworder');

  service.hooks(hooks);
};
