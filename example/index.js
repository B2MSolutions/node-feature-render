var express = require('express'),
  featureRender = require('../index'),    
  app = express();

app.engine('ejs', require('ejs').renderFile);
app.use(featureRender);

app.get('/', function(req, res) {
  return res.render('index.ejs');
});

app.listen(8000);
