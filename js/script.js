"use strict";

const namberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

if(namberOfFilms > 50) {
    console.log('вы киноман!');
} else if (namberOfFilms < 50) {
    console.log('просмотрено слишком мало фильмов');
}else{
    console.log('произошла ошибка');
}

const personalMovie = {
    count: namberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};



for (let i = 0; i < 2; i++){

let a = prompt("последний фильм,который вы посмотрели", ""),
    b = prompt("оцените его по 10 бальной шкале", "");    

if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovie.movies[a] = b;   
 console.log(personalMovie.movies[a] + ': ' + personalMovie.movies[b]);    
} else{
i--
}   
}


console.log(personalMovie);

