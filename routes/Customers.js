require('dotenv').config()
const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const customers = express.Router()
const bcrypt = require('bcryptjs')

//Define veriable for Sequelize database
const db = require('../db');
const Sequelize = db.sequelize;
const Op = Sequelize.Op;

const Customer = require('../models/UserDetails')
const User = require("../models/User");
customers.use(cors())

/******************************************
*  PROVIDE CUSTOMER INFO FOR REGISTRATION
*******************************************/
customers.post('/customer-register', (req, res) => {
    const customerID = req.body.UserPK
    const customer = {
      //CustomerPK: req.body.CustomerPK,      
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PhoneNo: req.body.PhoneNo,
      Address: req.body.Address,
      City: req.body.City,
      State: req.body.State,
      Zipcode: req.body.Zipcode,
      Subscribe: req.body.Subscribe
    }
  
    Customer.update(customer, {
      where: {
        UserPK: customerID
      }
    })
      .then(result => {
        // let token = jwt.sign(customer.dataValues, process.env.SECRET_KEY, {
        //   expiresIn: 1440
        // })
        //   res.json({ token: token })
        if (result == 1) {
          res.send({
            message: "Customer was created successfully."
          });
        }
        else {
          res.send({
            message: "Customers route error: Cannot update user details."
          });
        }
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
          UserPK: req.params.id
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

/**************************
*  UPDATE CUSTOMER INFO
***************************/
customers.put('/update-customer-info/:id', (req,res) =>{
    const customerID = req.params.id
    Customer.update(req.body, {
        where: {UserPK: customerID}
    })
    .then(result => {
        if (result == 1) {
          res.send({
            message: "Customer was updated successfully."
          });
        }
        else {
          res.send({
            message: "Customer route error: Cannot update user details."
          });
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})

/******************************************************************************
*  GET ALL USERS (WITH DETAILS) CREATED WITHIN SPECIFIC TIME RANGE
*******************************************************************************/
customers.get('/get-all-users-created-within-time-range/:start/:end', (req, res) => {
  var query = `SELECT users.UserPK, users.Username, userdetails.FirstName, userdetails.LastName, 
                  users.Email, cast(users.CreatedDate as date) as CreatedDate
                FROM pmmc.users 
                  INNER JOIN pmmc.userdetails on users.UserPK = userdetails.UserPK
                WHERE users.CreatedDate between (:start) and (:end)
                  and users.IsActive = true
                ORDER BY users.CreatedDate desc`;
    Sequelize.query(query,{ 
        replacements: {
            start: req.params.start, 
            end:req.params.end            
         },
        type: Sequelize.QueryTypes.SELECT})
    .then(userInfo =>{
      res.json(userInfo);
    })
})

/*=============================== END ===============================*/
module.exports = customers

