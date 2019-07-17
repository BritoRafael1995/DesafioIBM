var app = require('./config/app_config');
var miojo = require('./miojo/miojoRouter');

app.get('/', function(req, res){
  res.end('Bem vindo a API')
});

app.use(app.router);
routes.initialize(app);