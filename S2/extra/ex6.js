/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.*/

let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, PrimerParametro, SegundoParametro){
    const PrimerParametro = array[SegundoParametro];
    array[PrimerParametro] = array[SegundoParametro];
    array[SegundoParametro] = PrimerParametro;

    return array;
}
