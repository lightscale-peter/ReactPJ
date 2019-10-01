const express = require('express');
const mongoose = require('mongoose');
const config = require('./server/config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const port = process.env.PORT || 8001;

app.use('/', express.static(__dirname + '/build'));

// app.get('/', (req, res) => {
//     res.send('Hello JWT!!' + __dirname);
// });

app.set('jwt-secret', config.secret);
app.use('/api', require('./server/routes/api'));

app.listen(port, ()=>{
    console.log(`Express is running on port ${port}`);
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
    console.log('connected to mongodb sever');
});

mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
