const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()
mongoose.connect(process.env.dbURL || 'mongodb://portal-financeiro-db:27017/portal', {useNewUrlParser: true})

mongoose.Promise = global.Promise

// Middlewares
app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(router)

app.use('/api', require('./routes'))

const port = process.env.PORT || 3000
const server = require('http').Server(app)

app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Welcome' })
})

server.listen(port)

