# node-feature-render

[![Build Status](https://secure.travis-ci.org/B2MSolutions/node-feature-render.png)](http://travis-ci.org/B2MSolutions/node-feature-render)

## Description
Express middleware for feature toggling views. This module allows you to use query strings to feature toggle alternative views in render. 

## Installation
    $ npm install feature-render

## Usage
In the following example, if you browse to http://localhost:8000, index.ejs will be rendered. 

If you pass in the toggle1 feature toggle by browsing to http://localhost:8000?ft=toggle1, index-toggle1.ejs will be rendered

If you pass in the toggle2 feature toggle by browsing to http://localhost:8000?ft=toggle2, index.ejs will be rendered as there is no overloaded view for toggle2.

You can check out the following example [here]()

```  
var express = require('express'),
  featureRender = require('../index'),    
  app = express();

app.engine('ejs', require('ejs').renderFile);
app.use(featureRender);

// when you navigate to http://localhost:8000 you will get index.ejs rendered
// when you navigate to http://localhost:8000?ft=toggle1 you will get index-toggle1.ejs rendered

app.get('/', function(req, res) {
  return res.render('index.ejs');
});

app.listen(8000);

```

## Contributors
Programmed by [Roy Lines](http://roylines.co.uk).


