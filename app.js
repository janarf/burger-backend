const express = require('express');
const app = express();
const db = require('./models/index')

app.listen(7001, console.log('servidor rodou'));

app.use('/users', require('./routes/user'))

db.sequelize.sync();
