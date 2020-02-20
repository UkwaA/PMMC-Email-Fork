const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const users = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
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
      Username: req.body.Username
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.Password, 10)
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

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      Username: req.body.Username
    }
  })
    .then(user => {
      if (bcrypt.compare(req.body.Password, user.Password)) {
        //if (user) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
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
      Username: decoded.Username
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

users.get('/get-user-details/:id', (req,res) => {
  User.findOne({
    where:{
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

users.put('/get-user-details/:id', (req,res) => {  
  const id = req.params.id
  User.update(req.body, {
    where: {UserPk: id} //body or params???
  })
  .then(result => {    
    if(result == 1) {
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
