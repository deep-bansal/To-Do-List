const express = require('express');
const port = 8000;

//connecting database to our server
const db = require('./config/mongoose');

const Note = require('./models/note');



const app = express();

//using parser over here
app.use(express.urlencoded());


// using routers
app.use ('/',require('./routes'));

//setting our viewing engine
app.set('view engine','ejs');
app.set("views","./views");





//to link static files like the css and javascript
app.use(express.static('./assets'));




app.listen(port,function(error){
    if(error){
        console.log(`Error in Running the Server: ${error}`);
        return;
    }

    console.log(`Server is Up and Working Properly on Port: ${port} `);

})