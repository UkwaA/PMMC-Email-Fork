const express = require('express');
const cors = require('cors')
const reservation = express.Router()
const bodyParser = require('body-parser')


const ReservationHeader = require('../models/ReservationHeader')
const ReservationGroupDetails = require('../models/ReservationGroupDetails')
const ReservationIndividualDetails= require('../models/ReservationIndividualDetails')

reservation.use(bodyParser.json());
reservation.use(cors())


/******************************************
*          CREATE NEW RESERVATION         *
*******************************************/
reservation.post('/add-new-reservation', (req, res) => {
    
})




// ========================END=====================
module.exports = reservation;