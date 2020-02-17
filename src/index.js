const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

mongoose.connect('mongodb+srv://admin:admin@cluster0-okstk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
// config Default
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)




app.listen(3333)