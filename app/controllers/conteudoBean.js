module.exports.conteudo = function(application, req, res){
    
    var connection = application.config.bdConnection();
    var conteudoModel = new application.app.models.conteudoDAO(connection);

    conteudoModel.getConteudo(function(error, result){
        res.render("conteudo/conteudos",{
            conteudos : result
        });
    });
    
}

module.exports.conteudo_especifico = function(application, req, res){
    var connection = application.config.bdConnection();
    var conteudoModel = new application.app.models.conteudoDAO(connection);

    var id = req.query;

    conteudoModel.getConteudoEspecifico(id, function(error, result){
        res.render("conteudo/conteudo_especifico",{
            conteudo : result
        });
    });
}