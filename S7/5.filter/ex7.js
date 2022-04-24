/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const handleChange = event => { //creamos la función handleChange que lee el evento por parámetro
    //console.log(event); opcionalmente leemos el evento que efectivamente se ejecuta cuando hacemos input
const jugadores = streamers.filter (streamer =>
    //creo una nueva constante con los streamers filtrados
    streamer.name.toLowerCase().includes(input$$.value.toLowerCase()));
    //estos streamers solo van a estar si incluyen el valor que tenga el input, es decir, el input.value
console.log(jugadores);
//y aquí muestro por consola solo los streamers que he buscado
}

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
//aquí capturo en un nodo el elemento de html que tenga el data-function="toFilterStreamers", es decir, el input

input$$.addEventListener('input', handleChange);
//aquí le añado el escuchador de eventos al nodo que al realizar el evento input ejecute la función handleChange
