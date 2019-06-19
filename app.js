const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/posts');
const path = require('path')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/', routes)

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'views')))

app.use(express.static(path.join(__dirname, 'public')))

// routes settings
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});



module.exports = app;