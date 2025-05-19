import {films} from '../JSON/infopelis.js';

let container;
let renderFilms

document.addEventListener("DOMContentLoaded", function (){
    const fullContainer = document.getElementById("film-container");

    container = document.createElement("div");
    container.classList.add("container");
    fullContainer.append(container);

    renderFilms = function (filmsToShow) {
        container.innerHTML = "";

        filmsToShow.forEach(film => {
            let card = document.createElement("div");
            card.classList.add("card");

            let targeta = document.createElement("div");
            targeta.classList.add("targeta");

            let titol = document.createElement("h2");
            titol.classList.add("targeta-titol");
            titol.textContent = film.name;

            let info = document.createElement("p");
            info.classList.add("targeta-info");
            info.innerHTML = "<strong>Year: </strong>" + film.year + "<br>" +
            "<strong>Style: </strong>" + film.style + "<br>" +
            "<strong>Director: </strong>" + film.director + "<br>" +
            "<strong>Actors: </strong>" + film.actors.join(", ") + "<br>" +
            "<strong>Oscars: </strong>" + film.oscars;

            container.append(card);
            card.append(targeta);
            targeta.append(titol, info);
        });
    };

    renderFilms(films);
});

window.funcio = function() {
    const inputCerca = document.getElementById("cerca");
    const query = inputCerca.value.trim().toLowerCase();
    const filtered = films.filter(film =>
        film.name.toLowerCase().includes(query)
    );
    renderFilms(filtered);
}