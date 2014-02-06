# node-feature-render

[![Build Status](https://secure.travis-ci.org/B2MSolutions/node-feature-render.png)](http://travis-ci.org/B2MSolutions/node-feature-render)

## Description
Express middleware for feature toggling views. This module allows you to use query strings to feature toggle alternative views in render. 

## Installation
    $ npm install feature-render

## Usage
feature-render is Express middleware and is used as follows:

```
var express = require('express'),
  featureRender = require('../index'),    
  app = express();

app.engine('ejs', require('ejs').renderFile);
app.use(featureRender);
...

```

Feature toggles are enabled by passing in a query parameter called "ft" to the query string of a url. For example to pass a feature toggle called 'newfeature' your url should be something like "http://mydomain.com/path?ft=newfeature".

Once you have enabled the feature-render middleware, any call to render on your response will look for an alternative view with the naming convention <view>-<featuretoggle>.<extension>. For example if you have enabled a feature toggle called "newfeature" and you call res.render('myview.ejs') then if a view called "myview-newfeature.ejs" exists then that view will be rendered instead. If no view is found or no feature toggle is passed the original view is rendered (in this case "myview.ejs").

In the [example](https://github.com/B2MSolutions/node-feature-render/tree/master/example), if you browse to [http://localhost:8000](http://localhost:8000), then the default view called index.ejs will be rendered. 

Passing in a feature toggle called "toggle1" in the query string will result in oggle by browsing to http://localhost:8000?ft=toggle1, index-toggle1.ejs will be rendered

If you pass in the toggle2 feature toggle by browsing to http://localhost:8000?ft=toggle2, index.ejs will be rendered as there is no overloaded view for toggle2.

## Contributors
Programmed by [Roy Lines](http://roylines.co.uk).


