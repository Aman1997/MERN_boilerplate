const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aman:projectpassword@cluster0.mbhma.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true})
        .then(() =>{
          console.log('DB connected')
        })
        .catch(err => console.error(err))

app.get('/', (req, res) =>{
  res.send('Hello world')
})

app.listen(5000)