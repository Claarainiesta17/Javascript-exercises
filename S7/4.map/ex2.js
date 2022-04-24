//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const usersName = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
//lo mismo que el ex1.js pero cogiendo la user.name[0] para encontrar la primera letra 'A'
//luego viene el condicional ternario:
//si user.name[0] (la primera letra de user.name) es igual a 'A' entonces user.name se convierte en 'Anacleto'
//es decir, Abel y Amanda pasarían a ser Anacleto
console.log(newUsersName);