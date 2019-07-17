
exports.tempoPreparo = function(amp1, amp2, callback){
    var retorno = `Ampulheta 1 - ${amp1} e Ampulheta 2 - ${amp2}`
  callback(retorno);
}

// app.get('/maps', function(req, res) {
//     var dados = [
//       {
//         lat: -25.470991, 
//         lon: -49.271036
//       },
//       {
//         lat: -0.935586,
//         lon: -49.635540
//       },
//       {
//         lat: -2.485874, 
//         lon: -43.128493
//       }
//     ];
  
//     res.send(JSON.stringify(dados));
//   });