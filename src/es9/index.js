const obj = {
    name: 'Cristian',
    age: 32,
    country: 'CO'
  };
  
// Operador de reposo

let { name, ...all2 } = obj;
console.log(name, all2);


  let { country, ...all } = obj;
  console.log(all);

  // Propagacion
  
  const obj = {
    name: 'Cristian',
    age: 32
  }
  
  const obj1 = {
    ...obj,
    country: 'CO'
  }
  
  console.log(obj1);
  

  // Cuando finaliza un llamado
  
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
  };
  
  helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
  

    // Cambios para Regex
  
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20');
    const year = match[1]
    const month = match[2]
    const day = match[3]
  
    console.log(year, month, day);