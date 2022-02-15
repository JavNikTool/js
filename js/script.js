"use strict";

const namberOfFilms = prompt("сколько фильмов вы посмотрели?");
console.log(namberOfFilms);

const personalMovie = {
    count: namberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

