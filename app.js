const express = require('express')
const app = express()
//const { Client } = require('pg')
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json());

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

app.post('/', (req, res) => {
	console.log('Wish: ' + req.body.textarea)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app is listening'))
