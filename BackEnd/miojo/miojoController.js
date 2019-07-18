
exports.tempoPreparo = function(tempo, a0, b0, callback){

  if(tempo % 2 != 0 && (a0 % 2 == 0 && b0 % 2 == 0)){
    callback("Não é possivel preparar o miojo no tempo correto com estas ampulhetas");
    return;
  }

  if(a0 <= tempo || b0 <= tempo){
    callback(`O tempo das ampulhetas precisam ser maiores que o tempo de cozimento do miojo`);
    return
  }



    

  

  var a = a0;
  var b = b0;

  var x = 0;
  var i = 1;

  while(x != tempo){

    console.log(`tentativa ${i}`);

    if(a < b )
      x = b - a;

    else
      x = a - b;

    console.log(`a ${a}`);

    console.log(`b ${b}`)

    console.log(`x ${x}`)

    if(a < b && x != tempo)
      a += a0;

    else if(x != tempo)
      b += b0;

    ++i;
  }

  if(a > b)
    callback(`O tempo mínimo para preparar o miojo é: ${a}`);

  else
    callback(`O tempo mínimo para preparar o miojo é: ${b}`);

  
}

  
//     res.send(JSON.stringify(dados));
//   });