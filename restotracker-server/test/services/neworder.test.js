const assert = require('assert');
const app = require('../../src/app');

describe('\'neworder\' service', () => {
  it('registered the service', () => {
    const service = app.service('neworder');

    assert.ok(service, 'Registered the service');
  });
});
