function cadastroDAO (connection){
    this._connection = connection;
}

cadastroDAO.prototype.salvarConteudo = function(conteudo, callback){
    this._connection.query('insert into conteudo_otaku set ?', 
        conteudo, callback);
}

module.exports = function(){
    return cadastroDAO;
}