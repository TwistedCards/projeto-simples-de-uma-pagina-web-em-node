module.exports = function(application){
    
    application.get('/conteudo_especifico', function(req,res){
        application.app.controllers.conteudoBean.conteudo_especifico(application, req, res);
    });

    application.get('/conteudos', function(req,res){
        application.app.controllers.conteudoBean.conteudo(application, req, res);
    });
}