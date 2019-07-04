const express = require('express');
const app = express();
const db = require('./models/index')

app.listen(7001, console.log('servidor rodou'));
app.use(express.json());

app.use('/users', require('./routes/user'));
app.use('/products', require('./routes/products'));
app.use('/extras', require('./routes/extras'));
app.use('/options', require('./routes/options'));
app.use('/clients', require('./routes/clients'));
app.use('/orders', require('./routes/orders'));
app.use('/orderProducts', require('./routes/orderProducts'));
app.use('/productExtras', require('./routes/productExtras'));
app.use('/productOptions', require('./routes/productOptions'));

db.sequelize.sync();
