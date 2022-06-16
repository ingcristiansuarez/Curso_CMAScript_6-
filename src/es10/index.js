
// Flat y flatmap
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


// QUitar espacios al inicio o al final
let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());
// No hay necesidad de enviar el error al catch
try {

} catch {
  error
}

// fromentries casar un arreglo a objeto

let entries = [["name", "Cristian"], ["age", 32]];
console.log(Object.fromEntries(entries));

// simbolo para obtener que se tiene de dicho elemento

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);