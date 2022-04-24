//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

function handleChange(event){ //al ex2.js solo le he cambiado la palabra 'input' a 'focus' y de handleFocus a handleChange
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener(input, handleFocus);

//handleChange se usa para establecer un nuevo estado