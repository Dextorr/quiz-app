const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/quiz-db')

const userSchema = new mongoose.Schema({
  
})

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
