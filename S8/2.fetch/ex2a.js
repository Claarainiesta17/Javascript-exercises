const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');

const search = () => {
    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}

const button$ = document.querySelector('button');

button$.addEventListener('click', search);