const divAvatar$$ = document.querySelector('[data-function="characters"]');

fetch('http://localhost:3000/planets')
.then((response) => {
    return response.json();
})
.then ((planets) => {
    console.log(planets);
    const divPlanets$$ = document.querySelector('[data-function="planets"]');
    for (const planet of planets) {
        let div$$ = document.createElement('div');
        div$$.innerHTML = `<img src="${planet.image}"/><h2>${planet.name}</h2>`;
        divPlanets$$.appendChild(div$$);
        div$$.addEventListener('click', () => {
            createElement (planet.id);
        });
    }
});

const createElement = (planetId) => {
    fetch('http://localhost:3000/characters?idPlanet=' + planetId)
.then((response) => {
    return response.json();
}).then (function (characters) {
    console.log(characters);
    divAvatars$$.innerHTML = ''
    for (const character of characters) {
        let div$$ = document.createElement('div');
        div$$.innerHTML = `<img src="${character.image}"/><h2>${character.name}</h2>`;
        divAvatar$$.appendChild(div$$);
    }

})

}