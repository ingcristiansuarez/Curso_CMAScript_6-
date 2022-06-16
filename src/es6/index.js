//////////////////////////
/* Clase 1 */
//////////////////////////
// Antes
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
  };
  
  newFunction2();
  newFunction2('Ricardo', '23', 'CO');
  
  let hello = "Hello";
  let world = "World";
  // Antes
  let epicPhrase = hello + ' ' + world;
  console.log(epicPhrase);
  // es6
  let epicPhrase2 = `${hello} ${world}`;
  console.log(epicPhrase2);
//////////////////////////
/* fin Clase 1 */
//////////////////////////

//////////////////////////
/* inicio Clase 2 */
//////////////////////////
  // Antes
  let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase epica que necesitamos."
  
  // es6
  let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica
  `;
  
  console.log(lorem);
  console.log(lorem2);
  
// (Desestructuración de objetos)
  let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
  }
  
  // antes
  console.log(person.name, person.age);
  // es6
  let { name, age } = person;
  console.log(name, age);
  
// Spread operator

// ANTES
  let team1 = ['Oscar', 'Julian', 'Ricardo'];
  let team2 = ['Valeria', 'Yesica', 'Camila'];
  // ES6 (Ahora se puede unir diferente elementos de esta manera)
  let education = ['David', ...team1, ...team2];
  
  console.log(education);
  
// VAR, ahora EC6 esta LET y CONST

  {
    // VAR Ahora se asigna para manera global
    var globalVar = "Global Var";
  }
  
  {

    // Los tipo let solo son asignados en el punto definido
    let globalLet = 'Global Let';
    console.log(globalLet);
  }
  
  console.log(globalVar);
  
// Variable que no es posible modificar
  const a = 'b';
  a = 'a';
  console.log(a);
//////////////////////////
/* fin Clase 2 */
//////////////////////////
//////////////////////////
/* inicio Clase 3 */
//////////////////////////
  // Objeto mejorada

  let name2 = 'Cristian';
  let age2 = 32;

  
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

// ARROW FUNCTIONS

const names = [
  { name: 'Cristian', age: 32 },
  { name: 'Paola', age: 31 }
]
// ANTES
let listOfNames = names.map(function (item) {
  console.log(item.name);
})
// EC6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ... 
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;

// PROMESAS (javascript es asincronico) para EC6

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("hola"))
  .catch(error => console.log(error));
//////////////////////////
/* fin Clase 3 */
//////////////////////////

//////////////////////////
/* inicio Clase 4 */
//////////////////////////

// uso de clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// Modulos

import { hello } from './module';

hello();

// Generetor 

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


//////////////////////////
/* fin Clase 4 */
//////////////////////////
