/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
Imprime en un console log el array.*/

//let sitios = [];

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},
{id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

/*for (let i = 0; i < placesToTravel.length; i++) {
    const places = placesToTravel[i];
    if(places.id !== 11 && places.id !== 40){
        places.push(placesToTravel);
    }
}

console.log(placesToTravel);*/

for (let i = 0; i < placesToTravel.length; i++) {
    const places = placesToTravel[i];
    if (places.id === 11 || places.id === 40) {
        placesToTravel.splice(index, 1);
    }
}

console.log(placesToTravel);