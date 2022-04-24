/*fetch('http://localhost:3000/diary')
.then(res => res.json())
.then(diary => {
    const sortedDiary = orderDiaryNotes(diary);
    createDiaryNotes(sortedDiary)
});*/

fetch('http://localhost:3000/diary')
.then((response) => {return response.json();
})
.then ((myDiary) => {
    console.log(myDiary);

    const mySortedDiary = myDiary.sort((a, b) => new Date(a.date) - new Date(b.date));

    /*for (let i = 0; i < myDiary.length; i++) {
        const diaryNote = myDiary[i];
        const div$$ = document.createElement('div');
        div$$.innerHTML = '<h3>${diaryNote.title}</h3><h5></h5>${diaryNote.date}<p>${diaryNote.description}</p>';
        document.body.appendChild(div$$);

        const button$$ = document.createElement('button');
        button$$.textContent = 'X';
        button$$.addEventListener('click', () => {removeDiaryNote(div$$)})
        div$$.appendChild(button$$);
    }
});

const removeDiaryNote = (diaryNote$$) => {
    diaryNote$$.remove();
}*/

//Con forof sería:
const createDiaryNotes = (diaryNotes) => {
    for (const diaryNote of mySortedDiary) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h3>${diaryNote.title}</h3><h5>${diaryNote.date}</h5><p>${diaryNote.description}</p>`;
        document.body.appendChild(div$$);

        const button$$ = document.createElement('button');
        button$$.textContent = 'Eliminar';
        button$$.addEventListener("click", function() {
            div$$.remove();
        })
        div$$.appendChild(button$$);
    }
}});
