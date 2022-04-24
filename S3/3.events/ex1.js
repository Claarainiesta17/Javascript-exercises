//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento
//click que ejecute un console log con la información del evento del click

function handleClick(event){
    console.log(event);
}

document.querySelector("#btnToClick").addEventListener("click", handleClick);









/*function handleClick(event) {
    console.log(event);
    console.log(event.target.innerHTML);
}

document.querySelector("#btn").addEventListener("click", handleClick);

document.querySelector("#btnClick").addEventListener("click", handleClick);

function handleClick(event) {
    console.log(event);
}*/