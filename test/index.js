var test = require('tape'),
  featureRender = require('../index.js');

test('middleware test', function(t) {
  t.plan(1);
  
  var req = {
  };
  
  var res = {
  };

  featureRender(req, res, function() {
    t.ok(true, 'it should return');
  });
})
