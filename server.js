const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000

app.use(express.static('public'));
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

var Email = require('./routes/Email')
app.use('/service', Email)

var Customer = require('./routes/Customers')
app.use('/customers', Customer)

/************** Use for deploy on AWS **************/
// app.use(express.static(__dirname + '/dist/client'));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/client'))
// });
/**************************************************/

app.listen(port , () =>{
  console.log("Server started on port 3000");
});

