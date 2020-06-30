const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const calendarProxy = proxy('/calendar', {target: 'localhost:3001'});
const reviewsProxy = proxy('/reviews', {target: 'localhost:3002'});
const carouselProxy = proxy('/carousel', {target: 'localhost:3003'});
const photosProxy = proxy('/photoGallery', {target: 'localhost:3004'});

app.use('/:roomId', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.use(calendarProxy)
app.use(reviewsProxy);
app.use(carouselProxy);
app.use(photosProxy);

app.listen(port);