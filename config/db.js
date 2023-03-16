const mongoose = require('mongoose');

function dbconnection(){
    mongoose.connect('mongodb+srv://ecommercsite:ecommercsite@cluster0.lpg1xbw.mongodb.net/ecommerce?retryWrites=true&w=majority')
    // .then(() => console.log('Connected!'));
}
module.exports = dbconnection