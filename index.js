//RESUELVE LOS EJERCICIOS AQUI

// Map
// Ejercicio 1 - Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.

const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados(numbers) {
  return numbers.map(function (num) {
    return num ** num;
  });
};

console.log(elevados(numbers));


// Ejercicio 2 - Dado el array foodList con valor ["Pizza", "Ramen", "Paella", "Entrecot"], generar un segundo array que consiga generar de salida el resultado esperado
// Pendiente

// Ejercicio 3 - Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado.
// Pendiente de completar 
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

//const resultadoStaff = staff.map(function (propiedades) {
 // return `${staff[name]} es ${staff[role]} y le gusta ${staff[hobbies]}`
//}); 

// Filter 
// Ejercicio 4 - Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers.filter(function (num) {
  return num % 2 !== 0;
});

console.log(result4);

// Ejercicio 5 - Dado el array foodList2 genera un segundo array result5 que filtre platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

const resultFoodList2 = foodList2.filter(function (propiedades) {
  if (foodList2.isVeggie === true) {
    return (`¡Que rico ${foodList2.name} me voy a comer!`);
  } else {
    return false;
  };
});

console.log(resultFoodList2);

// Ejercicio 6 - Dado el array inventory devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/

const resultInventory = inventory.filter(function (propiedades) {
  return inventory.price > 3;
});

console.log(resultInventory);

// Reduce
// Ejercicio 6 - Dado el siguiente array numeros [39, 2, 4 , 25, 62], obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

let multiplicacion = numeros.reduce(function (acumulador, num) {
  return acumulador * num;
}, 0);

console.log(multiplicacion);

// Ejercicio 7 - Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'alba',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

let concatenar = senteceElements.reduce(function(acumulador, string) {
  return acumulador + " " + string;
});

console.log(concatenar);

// Ejercicio 8 - Obtener el monto total de los elementos que pertenecen a category "code" en el siguiente array

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];