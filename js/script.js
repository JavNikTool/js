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
const lastFilm = prompt("последний фильм,который вы посмотрели");
const gradeOfFilms = prompt("оцените его по 10 бальной шкале");

personalMovie.movies={
        nameOfFilms: lastFilm,
        grade: gradeOfFilms
    };

console.log(`${personalMovie.movies.nameOfFilms}:`,`${personalMovie.movies.grade}`);