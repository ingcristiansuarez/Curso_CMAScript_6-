// Object entries

const data = {
    frontend: 'Oscar',
    backend: 'ISabel',
    design: 'Ana',
  }
  
  const entries = Object.entries(data);
  console.log(entries);
  console.log(entries.length);
  
  const values = Object.values(data);
  console.log(values)
  console.log(values.length)
  
  // PADDING

  const string = 'hello';
  console.log(string.padStart(7, 'hi'));
  console.log(string.padEnd(12, ' -----'))
  console.log('food'.padEnd(12, '  -----'))
  

  // LA coma para indicar posibles nuevos elementos
  const obj = {
    name: 'oscar',
  }


  // ASYNC AWAIT
  // Promesas:
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
  };
  
  const helloAsync = async () => {
      const hello = await helloWorld();
      console.log(hello);    
  };
  
  helloAsync();


  
  const anotherFunction = async () => {
    try {
      const hello = await helloWorld();
      console.log(hello);
    } catch (error) {
      console.log(error);
    }
  };
  
  anotherFunction();