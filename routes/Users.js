require('dotenv').config()
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const users = express.Router()
const bcrypt = require('bcryptjs')
const path = require('path');

const User = require('../models/User')
const Customer = require('../models/Customer')
users.use(cors())

/**************************
*        REGISTER
***************************/
users.post('/register', (req, res) => {
  console.log("Posting regular register")
  const today = new Date()
  const userData = {
    Username: req.body.Username,
    Password: req.body.Password,
    Role_FK: 1,
    Email: req.body.Email,
    CreatedDate: today,
    IsActive: true
  }

  
  User.findOne({
    where: {
      //check if the username exists
      Username: req.body.Username
      //Email : req.body.Email
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
            res.json({ UserPK: user.UserPK })
          
          //Create new customer entry in Customer table
          Customer.findOne({
            where: {
              CustomerPK: user.UserPK
            }
          })
          .then(customer =>{
            //If customer does not exist, create new one
            if(!customer){
              Customer.create({CustomerPK: user.UserPK})
              .catch(err => {
                res.send('errorExpressErr: ' + err)
              })
            }
            else{
              res.json({ error: 'Customer already exists' })
            }
          })


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



/**************************
*        LOG IN
***************************/
users.post('/login', (req, res) => {
  User.findOne({
    where: {
      //Check if username is match and account is active
      Username: req.body.Username,
      IsActive: true
    }
  })
    .then(user => {
      if (user) {
        if(bcrypt.compareSync(req.body.Password, user.Password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.json({ token: token, user: user })
          
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

/**************************
*    GET USER'S PROFILE
***************************/
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

/****************************************
   EDIT USER'S ACCOUNT - FOR ADMIN ONLY
****************************************/
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

/****************************************
    GET USER ACCOUNT DETAIL BY USERID
****************************************/
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

/****************************************
  UPDATE USER ACCOUNT DETAIL BY USERID
****************************************/
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

/****************************************
        RESET USER'S PASSWORD
****************************************/
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

/****************************************
      CHANGE CURRENT PASSWORD
****************************************/
users.post('/change-current-password/:id', (req,res) => {
  const newPasswordHash = bcrypt.hashSync(req.body.newPassword, 8)
  
  User.findOne({
    where: {
      UserPk: req.params.id
    }
  })
    .then(user => {
      //Check if input current Password matches with current Password
      if(bcrypt.compareSync(req.body.currentPassword, user.Password)){
        //if input current Password is correct, update new Password
        user.update({
          Password: newPasswordHash
        })
        res.json({message: "Password has been changed"})
      }
      else{
        res.json({error: "Current Password is incorrect"})
      }   
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


/****************************************
      SET USER ACCOUNT STATUS
****************************************/
users.get('/set-user-status/:id/:status', (req, res) => {
  const id = req.params.id
  const status = req.params.status
  User.findOne({
    where: {
      UserPK: id
    }
  })
    .then(user => {
      user.update({
        IsActive: status
      })
      res.json({message: "User status has been changed"})
    })
    .catch(err => {
      res.send('error: Set User Status ' + err)
    })
})

module.exports = users