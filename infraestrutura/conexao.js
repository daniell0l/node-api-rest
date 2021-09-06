 
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MySql2019!',
    database: 'testedb'
})

module.exports = conexao