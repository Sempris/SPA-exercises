const userInput = document.getElementById("userSearch");
const main = document.getElementById("main");

userInput.addEventListener("change", () => {
    main.innerHTML = "";
    getData();
    display();
});

async function getData() {
    const movieData = await fetch(`http://www.omdbapi.com/?apikey=95af7aa3&s=${userInput.value}`);
    return await movieData.json();
}

async function display() {
    const data = await getData();
    data.Search.forEach(item => {
        const element = `<div class="movie-card">
        <div class="poster">
        <img src="${item.Poster}"/>
        </div>
        <div class="info">
        <h2>${item.Title}</h2>
        <h3>${item.Year}</h3>
        </div>
        </div>
        <hr>`;
        main.innerHTML += element;
    });
}