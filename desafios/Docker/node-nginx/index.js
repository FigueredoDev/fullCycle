const express = require('express')
const app = express()
const port = 8080

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    port: 3306
})

const query = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(query)

const queryInsert = `INSERT INTO people(name) values('Jhonata Figueredo')`
connection.query(queryInsert)

app.get('/', (request, response) => {
    connection.query(`SELECT name FROM people`, (error, results) => {
        const name = results[0].name

        response.send(`<h1>Full Cycle Rocks!</h1>
        <h2>People:</h2>
        <ul>
            ${name}
        </ul>
        `)
    })
})

app.listen(port, () => console.log("server running on port 8080"))