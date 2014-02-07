var fs = require('fs'),
  path = require('path');

var getFeatureViewName = function(req, view, toggle) {
    var ext = path.extname(view);
    if(ext.length === 0) {
      ext = '.' + req.app.get('view engine');
      view = view + ext;
    }

    var name = view.slice(0, ext.length * -1);
    return name + '-' + toggle + ext;
};

module.exports = function(req, res, next) {
  if (!req.query.ft) {
    return next();
  }

  res._render = res.render;
  res.render = function(view, options, callback) {
    var alternative = getFeatureViewName(req, view, req.query.ft);
    options = options || {};
    options.ft = req.query.ft;

    return fs.exists(path.join(req.app.get('views'), alternative), function(exists) {
      return res._render(exists ? alternative : view, options, callback);
    });
  };

  return next();
};
