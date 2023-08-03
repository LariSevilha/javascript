function retornaNumeroMaior(array){

//   var numeroMaior = array[0];
//   for (let i = 0; i < array.length; i++){
//      if (numeroMaior < array[i]){
//       numeroMaior = array[i];
//      }
//   }

// ------------------------------------

//   array.forEach(elemento => {
//   if(numeroMaior < elemento){
//     numeroMaior = elemento;
//   }
//   });
  

  return Math.max(...array)
}

const array = [1,2,3,4,5]
console.log(retornaNumeroMaior(array))