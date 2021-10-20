const mongoose = require('mongoose');

const PlantsSchema = new mongoose.Schema({
  breed: String, 
  needsSun: Boolean, 
  origin: String, 
  specialCare: String, 
  size: Number
});

module.exports = mongoose.model('plants', PlantsSchema);