const express = require('express');
const cors = require('cors')
const program = express.Router()

const Program = require('../models/Program')
const IndividualProgram = require('../models/IndividualProgram')
const GroupProgram = require('../models/Groupprogram')

program.use(cors())
// individualprograms.user(cors())
// groupprograms.user(cors())


program.get('/get-programs', (req, res) => {
    
    Program.findAll({
       
      })
        .then(program => {
          if (program) {
            res.json(program)
          } else {
            res.send('There is no program available.')
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    // Program.findAll({})
    // .then(program => res.json(program))
    // .catch(err => {
    //     res.send('error: ' + err)
    // })
})


program.post('/get-group-program', (req, res) => {

    GroupProgram.findAll({})
        .then(groupprograms => {
            res.json(groupprograms)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = program


