// Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

// Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

// La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo ``http://localhost:3000/characters?idPlanet=1`` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.

// Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

const urlPlanetDragonBall = "http://localhost:3000/planets";
const urlCharactersDragonBall = "http://localhost:3000/characters";

// function getCharacterBySearch(idPlanet) {
function getCharacterBySearch(idPlanet, arrayCharacters) {
  console.log("arrayCharactersxxxx" + arrayCharacters);
  const findCharacter$$ = document.getElementById("mySearch").value; //Fuck!!! cuando ponía value no me lo proponía...
  console.log(findCharacter$$);
  console.log("idplanet: " + idPlanet);
  // console.log("arrayCharacters: " + arrayCharacters);
}

function getDragonBallCharactersByPlanet(idPlanet) {
  fetch(urlCharactersDragonBall + "?idPlanet=" + idPlanet)
    .then((res) => res.json())
    .then((characters) => {
      console.log("here i am!!!!:" + characters);
      const characters$$ = document.querySelector(
        '[data-function="characters"]'
      );
      const searchcharacters$$ = document.querySelector(
        '[data-function="searchcharacters"]'
      );
      const searchcharacter$$ = document.createElement("div");
      searchcharacters$$.innerHTML = "";
      characters$$.innerHTML = "";
      let arrayCharacters = []; //here we have all characters from planet

      for (const iterator of characters) {
        const character$$ = document.createElement("div");
        console.log(iterator);
        character$$.innerHTML = `
                <img height=50 src="${iterator.avatar}"/>
                <h4>${iterator.name}</h4>
                `;

        characters$$.appendChild(character$$);
        arrayCharacters.push(iterator.name);
      }
      console.log("arrayCharacters" + arrayCharacters);
      searchcharacters$$.innerHTML = `
            <input type="search" id="mySearch" placeholder="Search character from planet ${idPlanet}...">
      <button onclick="getCharacterBySearch(${idPlanet}, ${arrayCharacters})">Find character</button>
                            `;

      //do it by addEventListener instead of onclick!!!

      // searchcharacters$$.innerHTML = `
      //                 <input type="search" id="mySearch" placeholder="Search character from planet ${idPlanet}...">
      //           <button onclick="getCharacterBySearch(${
      //             (idPlanet, arrayCharacters)
      //           })">Find character</button>
      //                                 `;
    });
}

fetch(urlPlanetDragonBall)
  .then((res) => res.json())
  .then((planets) => {
    console.log(planets);
    for (const iterator of planets) {
      const planet$$ = document.createElement("div");
      console.log(planet$$);
      planet$$.innerHTML = `
            <img height= "100px" src="${iterator.image}"/>
            <h4>${iterator.name}</h4>
            `;

      const planets$$ = document.querySelector('[data-function="planets"]');
      planets$$.appendChild(planet$$);
      console.log(planet$$);

      planet$$.addEventListener("click", () =>
        getDragonBallCharactersByPlanet(iterator.id)
      );
    }
  });
