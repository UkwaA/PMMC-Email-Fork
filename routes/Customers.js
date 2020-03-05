require('dotenv').config()
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const customers = express.Router()
const bcrypt = require('bcryptjs')

const Customer = require('../models/Customer')
customers.use(cors())

/******************************************
*  PROVIDE CUSTOMER INFO FOR REGISTRATION
*******************************************/
customers.post('/customer-register', (req, res) => {
    const customer = {
      CustomerPK: req.body.CustomerPK,
      // UserFK: '0',
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PhoneNo: req.body.PhoneNo,
      Address: req.body.StreetAddress,
      City: req.body.City,
      State: req.body.State,
      Zipcode: req.body.Zipcode,
      Subscribe: req.body.Subscribe
    }
  
    Customer.create(customer)
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

/**************************
*  GET CUSTOMER INFO
***************************/
customers.get('/profile-info/:id', (req, res) => {
    Customer.findOne({
        where: {
            CustomerPK: req.params.id
        }
    })
    .then(customer => {
        if(customer){
            res.json(customer)
        }
        else{
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = customers

