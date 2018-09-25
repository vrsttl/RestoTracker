const assert = require('assert');
const app = require('../../src/app');

describe('\'menuitem\' service', () => {
  it('registered the service', () => {
    const service = app.service('menuitem');

    assert.ok(service, 'Registered the service');
  });
});
