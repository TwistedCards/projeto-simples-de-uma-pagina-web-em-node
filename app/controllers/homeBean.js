module.exports.home = function(application, req, res){
    
    var connection = application.config.bdConnection();
    var homeBean = new application.app.models.conteudoDAO(connection);

    homeBean.getCincoUltimosConteudos(function(erros, result){
        res.render("home/home",{
            conteudos : result
        });
    });

}