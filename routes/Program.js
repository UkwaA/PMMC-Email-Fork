const express = require('express');
const cors = require('cors')
const program = express.Router()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

const Program = require('../models/Program')
const IndividualProgram = require('../models/IndividualProgram')
const GroupProgram = require('../models/Groupprogram')

program.use(bodyParser.json());
program.use(bodyParser.urlencoded({extended: false}));
program.use(cors())
program.use(fileUpload());

process.env.SECRET_KEY = 'secret'

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
})

program.get('/get-program-details/:id', (req, res) => {
  Program.findOne({
    where: {
      ProgramPK: req.params.id
    }
  })
    .then(program => {
      if (program) {
        res.json(program)
      } else {
        res.send('There is no program available.')
      }
    })
    .catch(err => {
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })
})


program.get('/get-individual-program-details', (req, res) => {

  IndividualProgram.findAll({
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
})

program.get('/get-group-program-details', (req, res) => {

  GroupProgram.findAll({
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
})

program.post('/add-program', (req, res) => {
  const today = new Date()
  var file = req.files.file;
  console.log(req.body.Name)
  file.mv('./uploads/' + file.name);
  // const programData = {
  //   Name: req.body.Name,
  //   Description: req.body.Description,
  //   FullAmount: req.body.FullAmount,
  //   CreatedDate: today,
  //   CreatedBy: req.body.CreatedBy,
  //   ImgData: ''
  // }

  // Program.create(programData)
  //   .then(program => {
  //     res.json(program.ProgramPK)
  //   })
  //   .catch(err => {
  //     res.send('errorResponse' + err)
  //   })
})

program.post('/add-image', (req, res) => {
  var file = req.files.file;
  console.log(file)

})


module.exports = program


