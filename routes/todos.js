const express = require('express');
const router = express.Router();
const SchemaPro = require('../Schema/projectSchema.js');


router.post('/projects', (req, res) => {
  const { title } = req.body;
  const newProject = new SchemaPro({ title: title });
  newProject.save().then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});


router.get('/getpro' , (req , res) => {
  SchemaPro.find().then((data) => {
    res.status(200).json(data);
  })
})

router.post('/delete', (req ,res) => {
  const { id } = req.body;
  SchemaPro.findByIdAndDelete(id).then((data) => {
    res.status(200).json(data);
  })
})

module.exports = router;