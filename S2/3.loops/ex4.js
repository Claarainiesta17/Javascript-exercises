/*Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`.
Recuerda que puedes usar la función `.includes()` para comprobarlo.*/

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'},
{id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

for (const toy of toys) {
    if(toy.name.includes("gato")){ //.includes sirve para identificar la palabra "gato"
        toys.splice(toys.indexOf(toy)) //splice sirve para cambiar y eliminar contenido existente, en este caso "gato"
    } //indexOf recorre lo de dentro del array de objetos y en este caso queríamos recoger "gato"
}

console.log(toys); //nos mostrará el array de objetos sin aquellos que incluyan la palabra "gato"