/*Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

- Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros*/

const caramelos = (a = 10, b = 5) => {
    console.log(a + b);
}

caramelos(); //15 porque coge la a y la b de arriba
caramelos(34); //39 porque coge 34 + b
caramelos(52, 12);//64 porque coge los dos parámetros

console.log(a+b);