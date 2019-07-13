// auxiliar functions
function isDelimiter(posibleIndiceValido, string, delimiter) {
  let result = false;
  let indiceString = posibleIndiceValido;
  let indiceDelimitador = 0;
  let caracterString = string[indiceString];
  let caracterDelimiter = delimiter[indiceDelimitador];

  while (caracterString === caracterDelimiter) {

    indiceString++;
    indiceDelimitador++;
    caracterString = string[indiceString];
    caracterDelimiter = delimiter[indiceDelimitador];

    if (indiceDelimitador + 1 > delimiter.length) {
      result = true;
    }
  }
  return result
}


function getIndexesDelimiterInString(string, delimiter) {
  let indexes = [];

  let i = 0;
  while (i < string.length) {
    posibleIndiceValido = i;
    if (isDelimiter(posibleIndiceValido, string, delimiter)) {
      indexes.push(posibleIndiceValido);
      i = i + delimiter.length;
    } else
      i++;

  }

  return indexes
}

function getSubstring(string, delimiter, indiceDelimitador, anteriorIndicedelimitador) {
  let result = "";
  let startIn = 0;

  if (anteriorIndicedelimitador !== '' && anteriorIndicedelimitador > 0) {
    startIn = anteriorIndicedelimitador + delimiter.length;
  }

  for (let i = startIn; i < indiceDelimitador; i++) {
    result = result + string[i];
  }
  return result;
}



/*
   Split function
 */

function split(string, delimiter) {

  let finalArray = [];

  let indiceCaracter = 0
  let anteriorIndicedelimitador = '';

  let indexesDelimiterInString = getIndexesDelimiterInString(string, delimiter);

  let posIndiceDelimitador = 0;
  let indiceDelimitador;
  let substring;

  while (posIndiceDelimitador < indexesDelimiterInString.length) {
    indiceDelimitador = indexesDelimiterInString[posIndiceDelimitador];
    substring = getSubstring(string, delimiter, indiceDelimitador, anteriorIndicedelimitador)
    finalArray.push(substring);
    anteriorIndicedelimitador = indiceDelimitador;
    posIndiceDelimitador++;
  }

  if ((indiceDelimitador + delimiter.length) < string.length) {
    substring = "";
    for (let i = indiceDelimitador + delimiter.length; i < string.length; i++) {
      substring = substring + string[i];
    }
    finalArray.push(substring);
  }

  return finalArray;

}


let string = "abcbd";
let delimiter = "bc";
let indexesDelimiterInString;
let substring;





console.log('Expected => a, bd');
console.log("Return => " + split("abcbd", "bc"));

console.log();
console.log('Expected => a, b, c')
console.log("Return => " + split("a,b,c", ","))
console.log();
console.log('Expected => a, bd, bd');
console.log("Return => " + split("abcbdbcbd", "bc"))


console.log("Fin test");