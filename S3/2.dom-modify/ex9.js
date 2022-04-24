//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const todosLosDiv$$ = document.querySelectorAll('[fn-insert-here]');

const p$$ = document.createElement('p');

p$$.textContent = 'Voy dentro!'

todosLosDiv$$.appendChild(p$$);

//SOLUCIÓN ABEL:

/*const allDiv$$ = document.querySelectorAll('.fn-insert-here');

for (const div$$ of allDiv$$) {
    const p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro!';
    div$$.appendChild(p$$);
}*/