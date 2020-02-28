require('dotenv').config()
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const users = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')
const Customer = require('../models/Customer')
users.use(cors())


users.post('/register', (req, res) => {
  console.log("Posting regular register")
  const today = new Date()
  const userData = {
    Username: req.body.Username,
    Password: req.body.Password,
    Role_FK: 1,
    Email: req.body.Email,
    CreatedDate: today
  }

  User.findOne({
    where: {
      //Username: req.body.Username
      Email : req.body.Email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.Password, 8)
        userData.Password = hash

        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('errorExpressErr: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/customer-register', (req, res) => {
  console.log("Posting customer-register")
  console.log(req.body.ZipCode)
  const customerData = {
    CustomerPK: 0,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    PhoneNo: req.body.PhoneNo,
    StreetAddress: req.body.StreetAddress,
    City: req.body.City,
    State: req.body.State,
    ZipCode: req.body.ZipCode,
    Subscribe: req.body.Subscribe
  }

  Customer.create(customerData)
    .then(customer => {
      let token = jwt.sign(customer.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440
      })
        res.json({ token: token })
      })
    .catch(err => {
      res.send('errorExpressErr: ' + err)
    })
})

users.post('/login', (req, res) => {
  //res.send('error: ' + req.body.Password + "--" + req.body.Username)
  User.findOne({
    where: {
      Username: req.body.Username
      // Password: req.body.Password
    }
  })
    .then(user => {
      if (user) {
        if(bcrypt.compareSync(req.body.Password, user.Password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.json({ token: token })
        } else {
          res.send('Wrong password')
        }
        

      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      Username: decoded.Username,
      Password: decoded.Password
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/edit-user', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findAll({})
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('There is no user available');
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/get-user-details/:id', (req, res) => {
  User.findOne({
    where: {
      UserPk: req.params.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.put('/get-user-details/:id', (req, res) => {
  const id = req.params.id
  User.update(req.body, {
    where: { UserPk: id } 
  })
    .then(result => {
      if (result == 1) {
        res.send({
          message: "User was updated successfully."
        });
      }
      else {
        res.send({
          message: "User route error: Cannot update user details."
        });
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.put('/reset-password/:id', (req, res) => {
  const id = req.params.id
  const hash = bcrypt.hashSync(req.body.Password, 8)
  req.body.Password = hash

  User.update(req.body, {
    where: { UserPk: id } 
  })
    .then(result => {
      if (result == 1) {
        res.send({
          message: "User was updated successfully."
        });
      }
      else {
        res.send({
          message: "User route error: Cannot update user details."
        });
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = users


// // Get Login Data
// app.get('/login', (req, res) => {
//     let sql = 'SELECT SINGLE FROM USER';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send("Database created...");
//     });
// })
