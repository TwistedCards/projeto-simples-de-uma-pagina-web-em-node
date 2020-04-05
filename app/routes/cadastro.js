module.exports = function(application){
    application.get('/cadastro', function(req,res){
        application.app.controllers.cadastroBean
            .telaCadastroBean(application, req, res);
    });

    application.post('/cadastro/salvar', function(req,res){
        application.app.controllers.cadastroBean
            .cadastro(application, req, res);
    });

}