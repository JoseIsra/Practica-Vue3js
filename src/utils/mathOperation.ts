

type solution = number | string;
// interesante, los Refs pueden usarse en cualquier otra parte siempre con su value property
function calculateWith(numero1:string, numero2:string, mathSign:string):solution {
  let result:solution;
  switch (mathSign) { 
    case '+': result = +numero1 + +numero2;
      break;
    case '-': result = +numero2 - +numero1;
      break;
    case '*': result = +numero1 * +numero2;
      break;
    case '/': 
      if (+numero1 === 0) {
        result = 'no se puede dividir';
      } else {
        result = +numero2 / +numero1;
      }
      break;
    default: result = 0;
  }
  return result;
}

export default calculateWith;
