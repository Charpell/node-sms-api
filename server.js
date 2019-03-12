const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv')

dotenv.config()

const databaseConfig = require('./config')
const routes = require('./routes')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

databaseConfig()

app.get('/', (req, res) => {
	res.status(200).json({ 'message': 'A simple node sms app'})
})

routes(app)



app.listen(PORT)