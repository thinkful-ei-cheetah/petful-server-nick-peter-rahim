'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./cors-whitelist');
const morgan = require('morgan');
const app = express();
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
const { PORT } = require('./config');
const dogsRouter = require('./dogs/dogsRouter');
const catsRouter = require('./cats/catsRouter');
app.use(cors({ origin: corsOptions }));

app.use(morgan(morganSetting));

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);

app.use('/', (req, res) => {
  res.send('<h1>Hello World from Peter, Rahim, Nick</h1>');
});

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log('Serving on 8080');
});
