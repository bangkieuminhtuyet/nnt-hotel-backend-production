const express = require('express');

const viewEngine = (app, path) => {
  app.use(express.static('.src/public'));
  app.set('view engine', 'ejs');
  app.set('views', '.src/views');
};

module.exports = viewEngine;
