//here we require mongoose
const mongoose = require('mongoose');

//establishing connection between mongoose and mongo
mongoose.connect('mongodb://localhost/todo_list_db');

const db =  mongoose.connection;

//if there is an error
db.on('error',console.error.bind(console,'error connecting to db'));

//if connection successful
db.once('open',function(){
    console.log("successfully connected to database");
});


