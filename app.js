const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true}))

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json())

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
 	ssl: { rejectUnauthorized: false }
})

app.post('/wishss', (req, res) => {
	var wished = req.body.textarea
	var wish_string = "INSERT INTO wishes(wish)VALUES('"+wished+"')"

	pool.connect(err => {
	if (err) {
		console.error('connection error', err.stack)
		} else {
			console.log('connected to db')
		}	
	})

	pool.query(
	wish_string,
	(err, res) => {
		console.log(err, res)
	}
	)
})

app.post('/emailss', (req, res) => {
	var emailed = req.body.mail
	var email_string = "INSERT INTO emails(email)VALUES('"+emailed+"')"

	pool.connect(err => {
	if (err) {
		console.error('connection error', err.stack)
		} else {
			console.log('connected to db')
		}	
	})

	pool.query(
	email_string,
	(err, res) => {
		console.log(err, res)
	}
	)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app is listening'))
