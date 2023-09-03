const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const cors = require('cors');

dotenv.config({path: './config.env'})
require('./db/connection')
const Files = require('./models/fileschema')


app.use(cors());
app.use(require('./routes/file'))


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
});