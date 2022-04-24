const baseUrl = `http://localhost:3000/characters`;

const characters$$ = document.querySelector("[data-function='characters']")

//SEGÚN LA SOLUCIÓN PRIMERO VA ESTO:
/*init();
async function init() {
    const characters = await getCharacters();
    printCharacters(characters);
}

async function getCharacters() {
    try {
        const res = await fetch("http://localhost:3000/characters");
        return await res.json();
    } catch (e) {
        console.error(e)
    }
}

function printCharacters(characters) {
    for (const character of characters) {
        const div$$ = document.createElement("div");
        div$$.classList.add("c-characters__item")
        div$$.innerHTML = `
            <img src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `

        div$$.addEventListener("click", () => { selectPlayer(character) })
        characters$$.appendChild(div$$)
    }
}

const printCards = (card) => {
    console.log("card", card);
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p");

        title$$.textContent = card.name;
        image$$.src = card.sprites.other['official-artwork'].front_default;
        type$$.textContent = card.types.map ((item) => item.type.name);

        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        gallery$$.appendChild(figure$$);
        figure$$.appendChild(type$$);

}

getCards();*/

function getCharacters(characters) {
    for (let i = 0; i < characters$$; i++){
    peticionPersonajes(i);
}}

function peticionPersonajes(characters) {
    fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((resParsedToJSON) => {
        console.log(resParsedToJSON);
        printCharacters();
    })
}

const printCharacters = (card) => {
    console.log("card", card);
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p");

        title$$.textContent = card.name;
        image$$.src = card.sprites.other['official-artwork'].front_default;
        type$$.textContent = card.types.map ((item) => item.type.name);

        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        gallery$$.appendChild(figure$$);
        figure$$.appendChild(type$$);

}

getCharacters()