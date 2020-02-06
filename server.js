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


// // Create connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'pmmc'
// });

// // Connect
// db.connect((err) => {
//     if(err){
//         console.log("error: " + err);
//     }
//     else{
//         console.log('MySQl Connected ...');
//     }
// })



app.listen(port , () =>{
  console.log("Server started on port 3000");
});

