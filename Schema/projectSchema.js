const mongoose = require('mongoose');

const Schemaproject = new mongoose.Schema({
  title :{
    type : String,
    required : true,
    unique : true,
  },
  tasts :[{
    type : mongoose.Types.ObjectId,
    ref : 'Tast',
    default : []
  }]
})

module.exports = mongoose.model('project', Schemaproject);