function conteudoDAO(connection){
    this._connection = connection;
}

conteudoDAO.prototype.getConteudo = function(callback){
    this._connection.query('select * from conteudo_otaku', callback);
}

conteudoDAO.prototype.getCincoUltimosConteudos = function(callback){
    this._connection.query('select * from conteudo_otaku order by data_criacao desc limit 5', callback);
}

conteudoDAO.prototype.getConteudoEspecifico = function(id, callback){
    this._connection.query('select * from conteudo_otaku where id = '+id.id, callback);
}

module.exports = function(){
    return conteudoDAO;
}