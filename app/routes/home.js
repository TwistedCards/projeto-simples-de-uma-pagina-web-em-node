module.exports = function(application){
    application.get('/', function(req,res){
        application.app.controllers.homeBean
            .home(application, req, res);
    });
}