//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for (let i = 0; i < countries.length; i++) {
    const div$$ = document.createElement('div');
    const country = countries[i];
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
    document.body.appendChild(div$$);
}

const button$ = document.querySelector('button');

function handleClick(event) {
    button$.remove();
}

document.querySelector("button$").addEventListener("click", handleClick);

//SOLUCIÓN:
/*const button$$ = document.querySelector('button');

button$$.addEventListener('click', function () {
    const allDiv$$ = document.body.querySelectorAll('div');
    allDiv$$[allDiv$$.length - 1].remove();
})*/