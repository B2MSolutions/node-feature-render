var test = require('tape'),
  featureRender = require('../index.js');

test('middleware test', function(t) {
  t.plan(1);

  var req = {
    query: {}
  };

  var res = {};

  featureRender(req, res, function() {
    t.ok(true, 'it should return');
  });
})
