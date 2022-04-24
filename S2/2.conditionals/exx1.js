/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad
isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

/*for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    let contadorAprobados = 0; //Creo una variable dentro del bucle
    if(alumn.T1 === true){
        contadorAprobados +1;
    } else if(alumn.T2 === true){
        contadorAprobados +1;
    } else{
        contadorAprobados +1;
    }
    alumn.isApproved = contadorAprobados >= 2 ? true : false;
}

console.log(alumns);*/

for (let index = 0; index < alumns.length; index++) {
    pepe = alumns[index];

    let approvedCount = 0;
    approvedCount = pepe.T1 ? approvedCount + 1 : approvedCount;
    approvedCount = pepe.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = pepe.T3 ? approvedCount + 1 : approvedCount;

    pepe.isApproved = approvedCount >= 2 ? true : false;
}

console.log(alumns);
