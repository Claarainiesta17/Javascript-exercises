//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const div$$ = document.querySelectorAll('div'[1]); //escojo el 2o div

const p$$ = document.createElement('p'); //creo elemento p

p$$.textContent = 'Voy en medio!' //añado el texto

document.insertBefore(p$$, div$$); //le indico que la p$$ irá antes que el segundo div creado anteriormente