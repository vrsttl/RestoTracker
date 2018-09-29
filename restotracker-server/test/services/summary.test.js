const assert = require('assert');
const app = require('../../src/app');

describe('\'summary\' service', () => {
  it('registered the service', () => {
    const service = app.service('summary');

    assert.ok(service, 'Registered the service');
  });
});
