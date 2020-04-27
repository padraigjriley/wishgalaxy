const express = require('express')
const app = express()
//const { Client } = require('pg')

app.use(express.static('public'))

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app is listening'))
