/*Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una
lista ul > li de elementos en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');

ul$$ = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    li$$ = document.createElement('li');
    li$$.textContent = car;
    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);