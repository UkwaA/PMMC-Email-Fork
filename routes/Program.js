const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const program = express.Router()

const Program = require('../models/Program')
const IndividualProgram = require('../models/IndividualProgram')
const GroupProgram = require('../models/Groupprogram')

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


program.post('/add-program', (req, res) => {

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send('No files were uploaded.');
  // }

  const today = new Date()
  var imageFile = req.files.uploadedImage
  // Add path and filename for image
  var imgPath = '/asset/images/your/server/' + imageFile.name;
  const programData = {
    Name: req.body.Name,
    Description: req.body.Description,
    FullAmount: req.body.FullAmount,
    CreatedDate: today,
    CreatedBy: req.body.CreatedBy,
    ImgData:  imgPath
  }

  Program.create(programData)
    .then(program => {
      res.json("Program Added!")
    })
    .catch(err => {
      res.send('errorResponse' + err)
    })
  // if (imageFile.mimetype == "image/jpeg" || 
  //     imageFile.mimetype == "image/png" || 
  //     imageFile.mimetype == "image/gif") {
  //   // Create folder and upload image to server
  //   imageFile.mv(imgPath, function (err) {
  //     if(err){
  //       return res.status(500).send(err);
  //     }
     
  //   })
  // } else {
  //   message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  //   res.send(message);
  // }
})

module.exports = program


