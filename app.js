const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mongourl = "mongodb+srv://edureka:1234@cluster0.t9dwc.mongodb.net/movie?retryWrites=true&w=majority"


MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('movie');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });     
})

// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});