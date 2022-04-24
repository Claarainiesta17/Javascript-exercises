const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    
    if(element.toLowerCase().includes('Camiseta'.toLowerCase())){
        console.log(element);
    }
}

//toLowerCase te detecta las mayúsculas y minúsculas
//si no se pusiera toLowerCase después dentro del paréntesis no se detectaría la mayúscula
//porque si no fuera así también se podría codificar así:
//if(element.toLowerCase().includes('Camiseta'){
//más resumido

/*const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket',
'Cinturón de Orión', 'AC/DC Camiseta']*/

let Camisetas = []
products.forEach(element => {

    if(element.includes("Camiseta")) {
        Camisetas.push(element);
    }
});
console.log(Camisetas)
