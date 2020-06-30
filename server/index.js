const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.all('/calendar', createProxyMiddleware({ target: 'localhost:3001' }));
app.all('/reviews', createProxyMiddleware({ target: 'localhost:3002' }));
app.all('/carousel', createProxyMiddleware({ target: 'localhost:3003' }));
app.all('/photogallery', createProxyMiddleware({ target: 'localhost:3004' }));

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));