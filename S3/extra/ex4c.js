//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for (let i = 0; i < countries.length; i++) { //ex4a
    const div$$ = document.createElement('div'); //ex4a
    const country = countries[i]; //ex4a
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`; //ex4a

    const button$$ = document.createElement('button'); //ex4c
    button$$.textContent = 'Remove'; //ex4c

    div$$.appendChild(button$$); //ex4c

    button$$.addEventListener('click', function () { //ex4c
        div$$.remove(); //ex4c
    })

    document.body.appendChild(div$$); //ex4c
}

const button$$ = document.querySelector('button'); //ex4a

button$$.addEventListener('click', function () { //ex4b
    const allDiv$$ = document.body.querySelectorAll('div'); //ex4b
    allDiv$$[allDiv$$.length - 1].remove(); //ex4b
})

