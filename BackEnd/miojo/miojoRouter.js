var express = require('express');
var router = express.Router();
var miojoController = require('./miojoController');

router.post('/', function(req, res){
    var amp1 = req.body.amp1;
    var amp2 = req.body.amp2;
  
    miojoController.tempoPreparo(amp1, amp2, function(resp){
        res.json(resp);
    })
});
