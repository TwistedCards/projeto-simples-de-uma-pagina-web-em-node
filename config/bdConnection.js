var mysql = require('mysql');

var connMySql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '2018paulo!@#20',
        database : 'projeto_otaku'
    });
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com bd');
    return connMySql;
}