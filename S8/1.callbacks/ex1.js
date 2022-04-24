const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b
}


function father(a, b, callback) {
    const result = callback(a, b);
    numbersList.push(result);
}

father(4, 3, sum);

father(3, 2, sum);

father(4, 3, substract);

father(6, 3, substract);

console.log(numbersList);

