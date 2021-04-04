//nodejs
//import the modules
//require() function, used to import the modules
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");

//create rest object
//rest object, used to develop rest services
let app = express();
//where "app" is the rest object
//where "app" object is used to develop the rest services
//Ex. GET,POST,PUT,DELETE......

//MIME Type
app.use(bodyparser.json());

//enable cors policy
app.use(cors());

//server should accept the data from client application and parse it
app.use(bodyparser.urlencoded({extended:false}));


//connect to mongodb database
//create client object
let ashokIT = mongodb.MongoClient;
//where ashokIT is thr reference object
//where ashokIT is used to connect to mongodb database

//create the "GET" request
app.get("/api/products", (req,res)=>{
    ashokIT.connect('mongodb+srv://admin:admin@cluster0.urwtt.mongodb.net/ng8pm?retryWrites=true&w=majority',(err,connection)=>{
        if(err)
           throw err;
        else{
            const db = connection.db("ng8pm");
            db.collection("products").find().toArray((err,array)=>{
                if(err)
                  throw err;
                else{
                    res.send(array);
                }
                  
            });
        }
    });
});

//alot port number to node server(cloud server)
let port = process.env.PORT || 9193;
app.listen(port,()=>{
    console.log("server started");
});









