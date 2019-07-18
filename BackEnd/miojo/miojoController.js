
exports.tempoPreparo = function(tempo, a0, b0, callback){ 

  var a = a0;
  var b = b0;

  var x = 0;

  while(x != tempo){

    if(a < b )
      x = b - a;

    else
      x = a - b;

    if(a < b && x != tempo)
      a += a0;

    else if(x != tempo)
      b += b0;

  }

  if(a > b)
    callback(`O tempo mínimo para preparar o miojo é de ${a} minuto(s)`);

  else
    callback(`O tempo mínimo para preparar o miojo é de ${b} minuto(s)`);

  
}

  
//     res.send(JSON.stringify(dados));
//   });