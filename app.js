const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');
var dateTime = require('node-datetime');
var dt = dateTime.create();
var now = dt.format('Y-m-d H:M:S');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);



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



app.post('/emailss', (req, res) => {
	var emailed = req.body.mail
	console.log('Email: ' + emailed)
	var dt = dateTime.create()
	dt.offsetInHours(2)
	var now = dt.format('Y-m-d H:M:S')
	var email_string = "INSERT INTO emails(email, date)VALUES('"+emailed+"', '" + now + "')"
	console.log(email_string)

	pool.query(
		email_string,
		(err, res) => {
			console.log(err, res)
		}
	)
})

io.on('connection', (socket) => {
  console.log('a user connected');
	socket.on('make wish', (message) => {
		console.log(message);
			if(message===""){
				var query_ = "SELECT * FROM wishes ORDER BY date DESC LIMIT 16";

				pool.query(query_, (error, response)=>{
					io.emit('make wish', response.rows);
				})
			}else{
				var dt = dateTime.create()
				dt.offsetInHours(2)
				var now = dt.format('Y-m-d H:M:S')

				var wish_string = "INSERT INTO wishes(wish, date)VALUES('"+message+"', '" + now + "')"

				pool.query( wish_string, (err, res) => {
					//console.log(err,res);
					var query_ = "SELECT * FROM wishes ORDER BY date DESC LIMIT 16";

					pool.query(query_, (error, response)=>{
						io.emit('make wish', response.rows);
					})
				})
			}
  });

	socket.on('post email', (msg) => {
    io.emit('post email', msg);
  });
});


const port = process.env.PORT || 3000;
server.listen(port, () => console.log('app is listening'))
