const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors);

app.post('/login', (req, res) => {
    console.log(req.body).then((message) => {
    res.send("sucess");
    })
  });

app.listen(config.port, () => {
    console.log(`listening on ${config.port}`)
})