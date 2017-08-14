const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const models = require('./server/models');
const mysql = require('mysql2');
const sequelizeFixtures = require('sequelize-fixtures');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const mysqlDb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null
});
mysqlDb.connect((err) => {
  mysqlDb.query('CREATE DATABASE IF NOT EXISTS aip_movies', (err, result) => {
    if (err) throw err;
    models.sequelize.sync().then(() => {
      sequelizeFixtures.loadFile('./server/data/*.json', models);
    });
  });
});

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
