const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
var now = new Date()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true}))

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json())

// const pool = new Pool({
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'test',
// 	user: 'paddy',
// 	password: '123'
// })

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
  	ssl: {rejectUnauthorized: false},
})

pool.connect(err => {
	if (err) {
		console.error('connection error', err.stack)
	} else {
		console.log('connected to db')
	}	
})

app.post('/wishss', (req, res) => {
	var wished = req.body.textarea
	console.log('Wish: ' + wished)
	var now = new Date()
	var wish_string = "INSERT INTO wishes(wish)VALUES('"+wished+"', " + now + "')"

	pool.query(
		wish_string,
		(err, res) => {
			console.log(err, res)
	}
	)

})

app.post('/emailss', (req, res) => {
	var emailed = req.body.mail
	console.log('Email: ' + emailed)
	var now = new Date()
	var email_string = "INSERT INTO emails(email)VALUES('"+emailed+"', " + now + "')"
	console.log(email_string)

	pool.query(
		email_string,
		(err, res) => {
			console.log(err, res)
		}
	)

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app is listening'))
