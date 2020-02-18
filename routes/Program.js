const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const program = express.Router()
// const bodyParser = require('body-parser')

const Program = require('../models/Program')
const IndividualProgram = require('../models/IndividualProgram')
const GroupProgram = require('../models/Groupprogram')

// program.use(bodyParser.json());
// program.use(bodyParser.urlencoded({extended: false}));
program.use(cors())
program.use(fileUpload())
// individualprograms.user(cors())
// groupprograms.user(cors())

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

program.get('/get-program-details', (req, res) => {
  Program.findOne({
    where: {
      ProgramPK: req.body.ProgramPK
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

program.post('/add-program', (req, res, next) => {
  const today = new Date()
  const programData = {
    Name: req.body.Name,
    Description: req.body.Description,
    FullAmount: req.body.FullAmount,
    CreatedDate: today,
    CreatedBy: req.body.CreatedBy,
    ImgData: ''
  }

  Program.create(programData)
    .then(program => {
      res.json(program.ProgramPK)
    })
    .catch(err => {
      res.send('errorResponse' + err)
    })
  // res.send("Image added " + req.files.sampleFile.name);
  // var imageFile = req.files.sampleFile
  // // Add path and filename for image
  // var imgPath = './uploads' + imageFile.name;
  // imageFile.mv(imgPath, function (err) {
  //   if(err){
  //     return res.status(500).send(err);
  //   }
  //   else{
  //     // const programData = {
  //     //   Name: req.body.Name,
  //     //   Description: req.body.Description,
  //     //   FullAmount: req.body.FullAmount,
  //     //   CreatedDate: today,
  //     //   CreatedBy: req.body.CreatedBy,
  //     //   ImgData:  imgPath
  //     // }

  //     // Program.create(programData)
  //     //   .then(program => {
  //     //     res.json("Program Added!")
  //     //   })
  //     //   .catch(err => {
  //     //     res.send('errorResponse' + err)
  //     //   })
  //     res.send("Image added " + req.files.sampleFile.name );
  //   }

  // })
  // if (imageFile.mimetype == "image/jpeg" ||
  //     imageFile.mimetype == "image/png" ||
  //     imageFile.mimetype == "image/gif") {
  //   // Create folder and upload image to server
  //   imageFile.mv(imgPath, function (err) {
  //     if(err){
  //       return res.status(500).send(err);
  //     }
  //     else{
  //       // const programData = {
  //       //   Name: req.body.Name,
  //       //   Description: req.body.Description,
  //       //   FullAmount: req.body.FullAmount,
  //       //   CreatedDate: today,
  //       //   CreatedBy: req.body.CreatedBy,
  //       //   ImgData:  imgPath
  //       // }

  //       // Program.create(programData)
  //       //   .then(program => {
  //       //     res.json("Program Added!")
  //       //   })
  //       //   .catch(err => {
  //       //     res.send('errorResponse' + err)
  //       //   })
  //       res.send("Image added " + req.files.sampleFile.name );
  //     }

  //   })
  // } else {
  //   message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  //   res.send(message);
  // }
})

module.exports = program


