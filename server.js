const express = require('express')
const app = express()
const cors = require("cors");
const mongoDB = require("./db")
mongoDB();


app.get('/', function(req, res) {
  res.send('hello world')
})

app.use(cors());
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'))


app.listen(8000, function(req, res) {
    console.log("Server in Port 8000");
});