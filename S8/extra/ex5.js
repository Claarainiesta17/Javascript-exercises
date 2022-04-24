const baseUrl = `https://opentdb.com/api.php?type=multiple&amount=`;
//AQUÍ ME FALTAN CONSTANTES!!

const answeredQuestions = [];

fetch(baseURl)
.then((response) => {
    return response.json();
})
.then(questions) => {
    const divQuestions$$ = document.querySelector('[data-function="gameboard"]');
    for (const quest of questions.results) {
        let div$$ = document.createElement('div');
        let h4$$ = document.createElement('h4');
        let p1$$ = document.createElement('p');
        let p2$$ = document.createElement('p');
        let p3$$ = document.createElement('p');
        let p4$$ = document.createElement('p');
        divGame$$.appendChild(div$$);

        h4$$.innerHTML = one.question;
        p1$$.innerHTML = one.correct_answer;
        p2$$.innerHTML = one.incorrect_answers[0];
        p2$$.innerHTML = one.incorrect_answers[1];
        p2$$.innerHTML = one.incorrect_answers[2];
        p1$$.classList.add('answer');
        p2$$.classList.add('answer');
        p3$$.classList.add('answer');
        p4$$.classList.add('answer');
        divGame$$.appendChild(h4$$);
        divGame$$.appendChild(p1$$);
        divGame$$.appendChild(p2$$);
        divGame$$.appendChild(p3$$);
        divGame$$.appendChild(p4$$);

const allAnswer = [... one.incorrect_answers, one.correct_answer];

for (const answer of allAnswer) {
    let p1$$ = document.createElement("p");
    p1$$.innerHTML = answer;
    p1$$.classList.add("answer");
    divGame$$.appendChild(p1$$);

    p1$$.addEventListener("click", () => {

    });
}

}};