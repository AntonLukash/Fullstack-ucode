document.addEventListener("DOMContentLoaded", function() {
    const filmList = document.getElementById("film-list");
    const filmTitle = document.getElementById("film-title");
    const filmPoster = document.getElementById("film-poster");
    const filmProductionDate = document.getElementById("film-production-date");
    const filmInformation = document.getElementById("film-information");
    const filmActors = document.getElementById("film-actors");
    
    const films = [
        {
            title: "The assassin hou hsiao hsien",
            poster: "assets/images/film1.jpg",
            productionDate: "2015",
            information: "Information about the assassin hou hsiao hsien",
            actors: ["Shy Ci", "Chan Chen", "Un Zou"]
        },
        {
            title: "Matrix",
            poster: "assets/images/film2.jpg",
            productionDate: "1999",
            information: "Information about Matrix",
            actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            poster: "assets/images/film3.jpg",
            productionDate: "2001",
            information: "Information about Harry Potter and the Philosopher's Stone",
            actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
        }
    ];

    function displayFilmInfo(index) {
        const film = films[index];
        filmTitle.textContent = film.title;
        filmPoster.src = film.poster;
        filmProductionDate.textContent = film.productionDate;
        filmInformation.textContent = film.information;
        filmActors.textContent = film.actors.join(", ");
    }

    filmList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const index = parseInt(event.target.getAttribute("data-index"));
            displayFilmInfo(index);
        }
    });

    displayFilmInfo(0);
});

