var sinon = require('sinon'),
  test = require('tape'),
  fs = require('fs'),
  featureRender = require('../index.js');


var testRender = function(query, options, expectedView, expectedOptions) {
  return function(t) {
    sinon.stub(fs, 'exists');
    fs.exists.withArgs('DIR/v-1.ejs').yields(true);
    fs.exists.withArgs('DIR/v-2.ejs').yields(false);
    t.plan(3);

    var req = {
      app: {
        get: sinon.stub()
      },
      query: query
    };

    var renderStub = sinon.stub();
    var res = {
      render: renderStub
    };

    req.app.get.returns('DIR');
    renderStub.yields();

    featureRender(req, res, function() {
      res.render('v.ejs', options, function() {
        t.ok(renderStub.calledOnce, 'render called once');
        t.deepEqual(renderStub.args[0][0], expectedView, 'view ok');
        t.deepEqual(renderStub.args[0][1], expectedOptions, 'options ok');
        fs.exists.restore();
      });
    });
  }
};

test('no feature toggle', testRender({}, {
  o: 1
}, 'v.ejs', {
  o: 1
}));

test('feature toggle with view and options', testRender({
  ft: '1'
}, {
  o: 1
}, 'v-1.ejs', {
  o: 1,
  ft: '1'
}));

test('feature toggle with view and no options', testRender({
  ft: '1'
}, null, 'v-1.ejs', {
  ft: '1'
}));

test('feature toggle without view, but with options', testRender({
  ft: '2'
}, {
  o: 1
}, 'v.ejs', {
  o: 1,
  ft: '2'
}));
