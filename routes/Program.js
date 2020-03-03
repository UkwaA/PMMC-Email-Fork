const express = require('express');
const cors = require('cors')
const fs = require('fs');
const program = express.Router()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

const Program = require('../models/Program')
const IndividualProgramRequirement = require('../models/IndividualRequirement')
const GroupProgramRequirement = require('../models/GroupRequirement')

program.use(bodyParser.json());
program.use(bodyParser.urlencoded({ extended: false }));
program.use(cors())
program.use(fileUpload());

process.env.SECRET_KEY = 'secret'

// Get All Program Header Information 
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

// Get All Program Header Information by ID
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

// // Get All Program Header Information of Individual Program
// program.get('/get-individual-program-details', (req, res) => {
//   IndividualProgram.findAll({
//   })
//     .then(program => {
//       if (program) {
//         res.json(program)
//       } else {
//         res.send('There is no program available.')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

// // Get All Program Header Information of Group Program
// program.get('/get-group-program-details', (req, res) => {
//   GroupProgram.findAll({
//   })
//     .then(program => {
//       if (program) {
//         res.json(program)
//       } else {
//         res.send('There is no program available.')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

// Create New Program Header
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
    ProgramType: req.body.ProgramType,
    IsActive: req.body.IsActive
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

      // Create Program Requirement for layout: Insert data to GroupProgramRequirement or IndividualProgramRequirement
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
          GroupProgramRequirement.create(groupDetail)
          .catch(err => {
            res.send('err Insert Groupl Requirement' + err)
          })
            // .then(program => {
            //   console.log(program.GroupProgramPK)
            //   Program.findOne({
            //     where: {
            //       ProgramPK: programPK
            //     }
            //   })
            //   .then(result => {
            //     result.update({
            //       IsActive : true
            //     })
            //   })
            //   res.json(program.GroupProgramPK)
            // })
          break;
        case '1':
          var individualDetail = {
            IndividualProgramPK: programPK,
            CreatedDate: today,
            CreatedBy: req.body.CreatedBy,
          }
          IndividualProgramRequirement.create(individualDetail)
          .catch(err => {
            res.send('err Insert Individual Requirement' + err)
          })
            // .then(program => {
            //   console.log(program.IndividualProgramPK)
            //   // Program.findOne({
            //   //   where: {
            //   //     ProgramPK: programPK
            //   //   }
            //   // })
            //   // .then(result => {
            //   //   result.update({
            //   //     IsActive : true
            //   //   })
            //   // })
            //   // res.json(program.IndividualProgramPK)
            // })
          break;
      }

      // Update IsActive for Program header
      Program.findOne({
        where: {
          ProgramPK: programPK
        }
      })
      .then(result => {
        result.update({
          IsActive : true
        })
        res.json(programPK)
      })
      

    })
    .catch(err => {
      res.send('errorResponse' + err)
    })

})

// Update Layout Setting of Group Program
program.post('/update-g-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = 0

  // Select the Program Layout Details if available
  GroupProgramRequirement.findOne({
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

// Update Layout Setting of Individual Program
program.post('/update-i-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = 0

  // Select the Program Layout Details if available
  IndividualProgramRequirement.findOne({
    where: {
      IndividualProgramPK: req.body.IndividualProgramPK
    }
  })
    // Update the layout details
    .then(program => {
      if (program) {
        program.update({
          ParticipantName: req.body.ParticipantName,
          ParticipantAge: req.body.ParticipantAge,
          Gender: req.body.Gender,
          MerchSize: req.body.MerchSize,
          AllergyInfo: req.body.AllergyInfo,
          SpecialInfo: req.body.SpecialInfo,
          InsureProviderName: req.body.InsureProviderName,
          InsureRecipientName: req.body.InsureRecipientName,
          InsurePolicyNo: req.body.InsurePolicyNo,
          InsurePhoneNo: req.body.InsurePhoneNo,
          AuthorizedPickupName1: req.body.AuthorizedPickupName1,
          AuthorizedPickupPhone1: req.body.AuthorizedPickupPhone1,
          AuthorizedPickupName2: req.body.AuthorizedPickupName2,
          AuthorizedPickupPhone2: req.body.AuthorizedPickupPhone2,
          EarlyDropOff: req.body.EarlyDropOff,
          LatePickup: req.body.LatePickup,
          MediaRelease: req.body.MediaRelease,
          EmergencyMedicalRelease: req.body.EmergencyMedicalRelease,
          LiabilityAgreement: req.body.LiabilityAgreement,
          FullAmount: req.body.FullAmount,
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

// Get Requirement Setting for Individual Program by ID
program.get('/get-individual-requirement/:id', (req, res) => {
  IndividualProgramRequirement.findOne({
    where: {
      IndividualProgramPK: req.params.id
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
      res.send('error: ' + err + "   " + req.body.IndividualProgramPK)
    })
})

// Get Requirement Setting for Group Program by ID
program.get('/get-group-requirement/:id', (req, res) => {
  GroupProgramRequirement.findOne({
    where: {
      GroupProgramPK: req.params.id
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
      res.send('error: ' + err + "   " + req.body.GroupProgramPK)
    })
})


module.exports = program


