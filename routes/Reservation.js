const express = require('express');
const cors = require('cors')
const reservation = express.Router()
const bodyParser = require('body-parser')

const ReservationGroupProgram = require('../models/ReservationGroupDetails')
const ReservationIndividualProgram = require('../models/ReservationIndividualDetails')
const Program = require('../models/Program')

reservation.use(bodyParser.json());
reservation.use(cors())