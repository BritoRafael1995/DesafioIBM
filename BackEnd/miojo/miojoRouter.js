var express = require('express');
var router = express.Router();
var miojoController = require('./miojoController');

router.post('/', function(req, res){

    var tempo   = req.body.tempo;
    var amp1    = req.body.amp1;
    var amp2    = req.body.amp2;


    if(amp1 <= tempo || amp2 <= tempo)
        return res.status(500).end("O tempo das ampulhetas precisam ser maiores que o tempo de cozimento do miojo");

    if((tempo % 2 != 0 && (amp1 % 2 == 0 && amp2 % 2 == 0)) || amp1 == amp2)
        return res.status(500).end("Não é possivel preparar o miojo no tempo correto com estas ampulhetas");
      
  
    miojoController.tempoPreparo(tempo, amp1, amp2, function(resp){
        return res.json(resp);
    })
});

module.exports = router;