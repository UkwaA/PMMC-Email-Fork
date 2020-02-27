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
            GroupProgramPK: programPK,
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
            IndividualProgramPK: programPK,
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

program.post('/update-g-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = 0

  // Select the Program Layout Details if available
  GroupProgram.findOne({
    where: {
      GroupProgramPK: req.body.GroupProgramPK
    }
  })
    // Update the layout details
    .then(program => {
      if (program) {
        program.update({
          AdultQuantity: req.body.AdultQuantity,
          Age57Quantity: req.bodyAge57Quantity,
          Age810Quantity: req.body.Age810Quantity,
          Age1113Quantity: req.body.Age1113Quantity,
          TotalQuantity: req.body.TotalQuantity,
          Deposit: req.body.Deposit,
          EducationFK: req.body.EducationFK,
          ProgramRestriction: req.body.ProgramRestriction,
          DepositAmount: req.body.DepositAmount,
          FullAmount: req.body.FullAmount,
          MaximumParticipant: req.body.MaximumParticipant,
          OrganizationName: req.body.OrganizationName,
          GradeLevel: req.body.GradeLevel,
          ScoutProgram: req.body.ScoutProgram,
          TeacherName: req.body.TeacherName,
          TeacherEmail: req.body.TeacherEmail,
          TeacherPhoneNo: req.body.TeacherPhoneNo,
          AlternativeDate: req.body.AlternativeDate,
          EducationPurpose: req.body.EducationPurpose,
          CreatedBy: req.body.CreatedBy,
          CreatedDate: today
        })
      } else {
        res.send('There is no program available.')
      }
    })
    .then(() => {
      res.json('Program Updated')
    })
    .catch(err => {
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })

})

program.post('/update-i-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = 0

  // Select the Program Layout Details if available
  IndividualProgram.findOne({
    where: {
      IndividualProgramPK: req.body.IndividualProgramPK
    }
  })
    // Update the layout details
    .then(program => {
      if (program) {
        program.update({
          ParticipantName:  req.body.ParticipantName,
          ParticipantAge : req.body.ParticipantAge,
          Gender : req.body.Gender,
          MerchSize :  req.body.MerchSize,
          AllergyInfo :  req.body.AllergyInfo,
          SpecialInfo :  req.body.SpecialInfo,
          InsureProviderName: req.body.InsureProviderName,
          InsureRecipientName: req.body.InsureRecipientName,
          InsurePolicyNo: req.body.InsurePolicyNo,
          InsurePhoneNo: req.body.InsurePhoneNo,
          AuthorizedPickupName1: req.body.AuthorizedPickupName1,
          AuthorizedPickupPhone1 : req.body.AuthorizedPickupPhone1,
          AuthorizedPickupName2: req.body.AuthorizedPickupName2,
          AuthorizedPickupPhone2 : req.body.AuthorizedPickupPhone2,
          EarlyDropOff:  req.body.EarlyDropOff,
          LatePickup: req.body.LatePickup,
          MediaRelease: req.body.MediaRelease,
          EmergencyMedicalRelease: req.body.EmergencyMedicalRelease,
          LiabilityAgreement:  req.body.LiabilityAgreement,
          FullAmount : req.body.FullAmount,
          CreatedBy: req.body.CreatedBy,
          CreatedDate: today
        })
      } else {
        res.send('There is no program available.')
      }
    })
    .then(() => {
      res.json('Program Updated')
    })
    .catch(err => {
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })

})

module.exports = program


