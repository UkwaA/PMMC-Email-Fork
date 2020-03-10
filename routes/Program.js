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

// Get Program Header Information With IsActive Property
program.get('/get-active-programs', (req, res) => {
  Program.findAll({
    where: {
      IsActive: true
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
      res.send('error: ' + err)
    })
})


// Get Program Header Information by ID
program.get('/get-program-header/:id', (req, res) => {
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

// Get Group Program Requirement by ID
program.get('/get-group-program-requirement/:id', (req, res) => {
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
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })
})


// Get Individual Program Requirement by ID
program.get('/get-individual-program-requirement/:id', (req, res) => {
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
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })
})

// Create New Program Header
program.post('/add-program', (req, res) => {
  const today = new Date()
  var programPK = 0

  const programData = {
    Name: req.body.Name,
    Description: req.body.Description,
    DepositAmount: req.body.DepositAmount,
    PricePerParticipant: req.body.PricePerParticipant,
    MaximumParticipant: req.body.MaximumParticipant,
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
            SubProgramPk: req.body.SubProgramPk,
            AdultQuantity: true,
            Age57Quantity: true,
            Age810Quantity: true,
            Age1112Quantity: true,
            Age1314Quantity: true,
            Age1415Quantity: true,
            Age1517Quantity: true,
            TotalQuantity: true,
            ProgramRestriction: true,
            OrganizationName: true,
            GradeLevel: true,
            TeacherName: true,
            TeacherEmail: true,
            TeacherPhoneNo: true,
            AlternativeDate: true,
            EducationPurpose: true,            
            CreatedDate: today,
            CreatedBy: req.body.CreatedBy,
          }
          GroupProgramRequirement.create(groupDetail)
            .catch(err => {
              res.send('err Insert Group Requirement' + err)
            })
          break;
        case '1':
          var individualDetail = {
            IndividualProgramPK: programPK,
            ParticipantName: true,
            ParticipantAge: true,
            Gender: true,
            MerchSize: true,
            AllergyInfo: true,
            SpecialInfo: true,
            InsureProviderName: true,
            InsureRecipientName: true,
            InsurePolicyNo: true,
            InsurePhoneNo: true,
            AuthorizedPickupName1: true,
            AuthorizedPickupPhone1: true,
            AuthorizedPickupName2: true,
            AuthorizedPickupPhone2: true,
            EarlyDropOff: true,
            LatePickup: true,
            MediaRelease: true,
            EmergencyMedicalRelease: true,
            LiabilityAgreement: true,
            CreatedDate: today,
            CreatedBy: req.body.CreatedBy,
          }
          IndividualProgramRequirement.create(individualDetail)
            .catch(err => {
              res.send('err Insert Individual Requirement' + err)
            })
          break;
      }

      res.json(programPK)
    })
    .catch(err => {
      res.send('errorResponse' + err)
    })

})

// Update Program Header 
program.post('/update-program-header', (req, res) => {
  Program.findOne({
    where: {
      ProgramPK: req.body.ProgramPK
    }
  })
    .then(program => {
      if (program) {
        program.update({
          Description: req.body.Description,
          DepositAmount: req.body.DepositAmount,
          PricePerParticipant: req.body.PricePerParticipant,
          MaximumParticipant: req.body.MaximumParticipant,
          ImgData: req.body.ImgData
        })
        res.status(200).send({
          message: 'Program Header Updated!'
        });
        res
      } else {
        res.status(400).send({
          message: 'Program is not found!'
        });
      }

    })
})

// Update Layout Setting of Group Program
program.post('/update-g-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = req.body.GroupProgramPK

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
          Age57Quantity: req.body.Age57Quantity,
          Age810Quantity: req.body.Age810Quantity,
          Age1112Quantity: req.body.Age1112Quantity,
          Age1314Quantity: req.body.Age1314Quantity,
          Age1415Quantity: req.body.Age1415Quantity,
          Age1517Quantity: req.body.Age1517Quantity,
          TotalQuantity: req.body.TotalQuantity,
          ProgramRestriction: req.body.ProgramRestriction,
          OrganizationName: req.body.OrganizationName,
          GradeLevel: req.body.GradeLevel,
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
      // Update IsActive for Program header after insert Requirement for Program
      Program.findOne({
        where: {
          ProgramPK: programPK
        }
      })
        .then(result => {
          result.update({
            IsActive: true
          })
        })
      res.json('Program Updated')
    })
    .catch(err => {
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })

})

// Update Layout Setting of Individual Program
program.post('/update-i-program-requirement', (req, res) => {
  const today = new Date()
  var programPK = req.body.IndividualProgramPK

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
          CreatedBy: req.body.CreatedBy,
          CreatedDate: today
        })
      } else {
        res.send('There is no program available.')
      }
    })
    .then(() => {
      // Update IsActive for Program header after insert Requirement for Program
      Program.findOne({
        where: {
          ProgramPK: programPK
        }
      })
        .then(result => {
          result.update({
            IsActive: true
          })
        })
      res.json('Program Updated')
    })
    .catch(err => {
      res.send('error: ' + err + "   " + req.body.ProgramPK)
    })

})

// Get Requirement Setting for Individual Program by ID
program.get('/get-individual-requirement/:id', (req, res) => {
  // Select active Program only
  Program.findOne({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
    .then(program => {
      // Select active Program Requirement
      IndividualProgramRequirement.findOne({
        where: {
          IndividualProgramPK: program.ProgramPK
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
})

// Get Requirement Setting for Group Program by ID
program.get('/get-group-requirement/:id', (req, res) => {
  // Select active Program only
  Program.findOne({
    where: {
      ProgramPK: req.params.id,
      IsActive: true
    }
  })
    .then(program => {
      // Select active Program Requirement
      GroupProgramRequirement.findOne({
        where: {
          GroupProgramPK: program.ProgramPK
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
})

/****************************************
      SET PROGRAM ACTIVE STATUS
****************************************/
program.get('/set-program-status/:id/:status', (req,res) => {
  const id = req.params.id
  const status = req.params.status
  Program.findOne({
    where: {
      ProgramPK: id
    }
  })
    .then(program => {
      program.update({
        IsActive: status
      })
      res.json({message: "Program status has been changed"})
    })
    .catch(err => {
      res.send('error: Set Program Status ' + err)
    })
})

module.exports = program


