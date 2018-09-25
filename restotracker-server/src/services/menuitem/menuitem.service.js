// Initializes the `menuitem` service on path `/menuitem`
const createService = require('feathers-mongoose');
const createModel = require('../../models/menuitem.model');
const hooks = require('./menuitem.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menuitem', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('menuitem');

  service.hooks(hooks);
};
