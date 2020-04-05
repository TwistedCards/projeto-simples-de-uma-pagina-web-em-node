
module.exports.telaCadastroBean = function(application, req, res){
    res.render("cadastro/cadastro",{
        validacao : {},
        conteudoRecuperado : {}
    });
}

module.exports.cadastro = function(application, req, res){
    
        var conteudo = req.body;

      req.assert('nome','Nome é obrigatorio').notEmpty();
      req.assert('autor','Autor é obrigatorio').notEmpty();
      req.assert('lancamento','Lancamento é obrigatorio').notEmpty();
      req.assert('capitulos','Capitulo é obrigatorio').notEmpty();
      req.assert('genero','Genero é obrigatorio').notEmpty();
      req.assert('descricao','Descrição é obrigatorio').notEmpty();
  
      var erros = req.validationErrors();
  
      if(erros){
          res.render("cadastro/cadastro",{
              validacao : erros,
              conteudoRecuperado : conteudo
          });
          return;
      }

    var connection = application.config.bdConnection();
    var cadastroModel = new application.app.models.cadastroDAO(connection);

    cadastroModel.salvarConteudo(conteudo, function(error, result){
        res.redirect("/conteudos");
    });
}
