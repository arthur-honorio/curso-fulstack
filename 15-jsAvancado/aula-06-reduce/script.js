const numeros = [1, 2, 3, 4]

 const numerosFinal = numeros.reduce((acc, curr)=> acc ? acc += ` - ${curr + 1}` : curr + 1 

/*{
  if(!acc) {
    return curr + 1
  } 
  acc += ` - ${curr + 1}`
  return acc 
}*/
  
, ``)

console.log(numerosFinal)