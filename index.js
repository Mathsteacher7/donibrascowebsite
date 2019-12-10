const express = require('express')
const mongoose = require('mongoose')
// mongoose.plugin(require('mongoose-unique-validator'), {
//   message: 'Please choose another {PATH}'
// })

const router = require('./config/routes')

const app = express()

const { port, dbURI } = require('./config/environment')

const bodyParser = require('body-parser')


mongoose.connect(dbURI)

app.use(bodyParser.json())

app.use('/', router)




app.listen(port, () => console.log('Doni is in the house!'))
