/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan
la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer
'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
*/

const filterStreamers = (event) => {
    const input$$ = event.target.previousElementSibling;
    // const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()))
    console.log(filteredStreamers);
}

const button$$ = document.querySelector('[data-function="toShowFilterStreamers"]');

button$$.addEventListener('click', filterStreamers);



