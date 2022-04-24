//{"name":"michael","age":70,"count":233482};
//Esto es lo que aparece en la url

fetch('https://api.agify.io?name=michael').then(res => res.json()).then(res => {
    console.log(res);
});

/*fetch('https://api.agify.io?name=michael')
.then(res => res.json())
.then(function (resValue) {;

console.log(resValue);
});*/