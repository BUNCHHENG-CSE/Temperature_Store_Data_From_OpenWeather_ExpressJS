const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    temperature: Number,
    timestamp:   Date, 
  });
module.exports = mongoose.model('data',dataSchema);  