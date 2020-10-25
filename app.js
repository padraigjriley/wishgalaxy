const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

const pool = new Pool({
	connectionString: "postgres://koxpwklkrgbovt:db42652e3f4ef31807b98457ac4acae0340dea3a0deeb7ad80aeb250dca55952@ec2-3-222-30-53.compute-1.amazonaws.com:5432/dab9u3rvn8hud1",
  ssl: {rejectUnauthorized: false},
})

pool.connect(err => {
	if (err) {
		console.error('connection error', err.stack)
	} else {
		console.log('connected to db')
	}
})

io.on('connection', (socket) => {
  	console.log('a user connected');
	var query_ = "SELECT * FROM wishes ORDER BY date DESC LIMIT 17";

	pool.query(query_, (error, response)=>{
	io.emit('make wish', response.rows);
	console.log(response.rows);
	})
});
	
const port = process.env.PORT || 3000;
server.listen(port, () => console.log('app is listening'))