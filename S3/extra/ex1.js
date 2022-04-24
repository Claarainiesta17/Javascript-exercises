//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul'); //creo nodo ul

for (let i = 0; i < countries.length; i++) { //recorro todos los países del array
    const country = countries[i]; //creo constante y paso por cada uno de los países
    const li$$ = document.createElement('li'); //creo el elemento li
    li$$.textContent = country; //está imprimiendo cada país dentro de li
    document.body.appendChild(li$$); //li$$ es el hijo de body
}

document.body.appendChild(ul$$); //ul$$ es el hijo de body
