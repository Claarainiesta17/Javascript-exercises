//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

let sumaTotal = 0;
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


for (const product of products) {
  sumaTotal +=product.sellCount;
}
console.log(sumaTotal);

/*let total=0,numeros = [1, 2, 3, 4, 5];
for(let i of numeros) total+=i;
console.log(total);*/