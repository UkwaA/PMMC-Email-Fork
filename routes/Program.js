const express = require('express');
const cors = require('cors')
const fs = require('fs');
const program = express.Router()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

const Program = require('../models/Program')
const IndividualProgram = require('../models/IndividualProgram')
const GroupProgram = require('../models/Groupprogram')

program.use(bodyParser.json());
program.use(bodyParser.urlencoded({ extended: false }));
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
  var programPK = 0

  const programData = {
    Name: req.body.Name,
    Description: req.body.Description,
    FullAmount: req.body.FullAmount,
    CreatedDate: today,
    CreatedBy: req.body.CreatedBy,
    ImgData: '',
    ProgramType: req.body.ProgramType
  }

  Program.create(programData)
    .then(program => {
      // After insert, return the PK
      programPK = program.ProgramPK

      // Create folder to store image of the program
      var tempDir = './public/uploads/' + programPK

      // Check the directory of the program. Create new if not exist
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      var file = req.files.file;
      var filePath = tempDir + '/' + file.name
      file.mv(filePath);

      // Update filePath of Image for program
      program.update({
        ImgData: filePath.substring(8)
      })

      // Create Program Details: Insert data to GroupProgram or IndividualProgram
      // based on ProgramType:
      // 0 - Group Program
      // 1 - Individual Program


      switch (req.body.ProgramType) {
        case '0':
          var groupDetail = {
            ProgramFK: programPK,
            CreatedDate: today,
            CreatedBy: req.body.CreatedBy,
          }
          GroupProgram.create(groupDetail)
            .then(program => {
              console.log(program.GroupProgramPK)
              res.json(program.GroupProgramPK)
            })
          break;
        case '1':
          var individualDetail = {
            ProgramFK: programPK,
            CreatedDate: today,
            CreatedBy: req.body.CreatedBy,
          }
          IndividualProgram.create(individualDetail)
            .then(program => {
              console.log(program.IndividualProgramPK)
              res.json(program.IndividualProgramPK)
            })
          break;
      }

    })
    .catch(err => {
      res.send('errorResponse' + err)
    })

})

module.exports = program


