var app = require('./config/app_config');
var miojo = require('./miojo/miojoRouter');

app.use('/api', miojo);