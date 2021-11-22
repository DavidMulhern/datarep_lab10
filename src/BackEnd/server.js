// code to setup a sever
// use the library 'express'
const express = require('express')
const app = express()
// specify port
const port = 4000
// get express to determine what directory we are in, using a package called path
const path = require('path')
// Include mongoose library
const mongoose = require('mongoose');
// body-parser used for .post 
const bodyParser = require("body-parser")

const cors = require('cors');
const { mainModule } = require('process');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// The two below lines allow for parse of body of a http request 
// app.use will fire EVERY TIME a request is made to the server 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//                                             add PW                           add DB name "movies"             
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.ilny4.mongodb.net/movies?retryWrites=true&w=majority';

// Using mongoose to connect server to the mongoDB
mongoose.connect(myConnectionString, {useNewUrlParser: true}); // HERE

// Define schema for Database
// const Schema = mongoose.Schema; // HERE

// documents of the collection
const movieSchema = new mongoose.Schema({
    Title:String,
    Year:String,
    Poster:String
});

// Use schema to create a new model for DB (movie collection, schema)
// refer to the below model when wanting to interact with the DB
const MovieModel = mongoose.model("movie", movieSchema)

// when we visit local host 3000, it will send the below back
// also where we setup our routes 
// '/' - is just the home page 
// Send text back
app.get('/', (req, res) => {
  res.send('Welcome to data representation and querying!')
})

// Adding new path - localhost:3000/hello
// to send a parameter, add this to '/hello' - '/hello/:name'
app.get('/hello/:name', (req, res)=>{

    // request, paramaters then name
    // example: url - http://localhost:3000/hello/Dave
    console.log(req.params.name) // This will show the given name paramter in the console

    // Response, send 'Hello'
    res.send('Hello ' + req.params.name) // Here there is a added parameter being returned and displayed

})

// Listening at this new URL 
// Send JSON back
app.get('/api/movies', (req, res)=>{

    // New variable with data, JSON list this time - An array[] of objects {}
    // const myMovies= 
    // [
    //     {
    //     "Title": "Avengers: Infinity War",
    //     "Year": "2018",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //     "Title": "Captain America: Civil War",
    //     "Year": "2016",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];

    // find document in the DB
    MovieModel.find((err, data) =>{
        res.json(data)
    })
        
    // JSON response {newObject:myMovies}
    // res.json({movies:myMovies}) 
    // This now returns as JSON data at the URL http://localhost:3000/api/movies
})

// Searching for a document with the id // Listening
app.get('/api/movies/:id', (req, res)=>{
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err,data) =>{
        res.json(data);
    })
})


// Finding by id and updating 
app.put('/api/movies/:id', (req, res)=>{
    console.log("Update: " + req.params.id);

    MovieModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
        (err, data)=>{
            res.send(data); // This will fire async and update
        })
})

// delete a record, using mongoose 
app.delete('/api/movies/:id', (req, res)=>{
    console.log("Delete Movie: " + req.params.id)

    // send(date) just being used here to satisfy parameters, not using it
    MovieModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

// Send html back
app.get('/test', (req, res)=>{

    // Transfers the file at the given path then 
    // sets the Content-Type response HTTP header field based on the filename’s extension.
    res.sendFile(__dirname + '/index.html'); // path package at work -> TO INDEX.HMTML
   
})

// Send html back
// .get requests send data as part of the URL 
app.get('/name', (req, res)=>{

    // res. send some text back
    // req. request the fname and lname from the .html form 
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
   
})

// listening for post mehtod - NOTE .post 
// .post requests send data as part of the body, need to import body-parser package to parse the body in express
// to use body-parser , >npm install body-parser 
// include it to the server above - const bodyParser = require("body-parser")
app.post('/name', (req, res)=>{

    // logic for post request 
    // Note .body - As it is being parsed from the body
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)

})

// requests send data as part of the body
app.post('/api/movies', (req, res)=>{

    // this will dislay on server console
    console.log(req.body.Title)
    console.log(req.body.Year)
    console.log(req.body.Poster)

    MovieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    });

    // Don't forget to have a response to see out the .post
    res.send('Item Added');
})

// listenng at port 3000 - setting up server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
