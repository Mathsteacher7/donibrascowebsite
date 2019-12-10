const mongoose = require('mongoose')

const videoScheme = new mongoose.Schema({
  url: String,
  location: String,
  otherDJs: [ String ],
  nameOfTheSet: [ String ]

})

module.exports = mongoose.model('Video', videoScheme)
