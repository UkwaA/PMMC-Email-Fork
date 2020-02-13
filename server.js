const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
app.use('/users', Users)

var Program = require('./routes/Program')
app.use('/program', Program)

app.listen(port , () =>{
  console.log("Server started on port 3000");
});

