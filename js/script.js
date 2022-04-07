"use strict";
let namberOfFilms;


function start () {
    namberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
    while(namberOfFilms == '' || namberOfFilms == null || isNaN(namberOfFilms)){
        namberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
    }
}

start(); 

function countingOfFilms(){
    if(namberOfFilms > 50) {
        console.log('вы киноман!');
    } else if (namberOfFilms < 50) {
        console.log('просмотрено слишком мало фильмов');
    }else{
        console.log('произошла ошибка');
    }
}

countingOfFilms();

const personalMovie = {
    count: namberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

function writeYourGentes(){
    for (let i = 1; i < 4; i++){

        let c = prompt(`ваш любимый жанр под номером ${i}`);

        if (c != null && c != '' && c.length < 15) {
        personalMovie.genres[i - 1] = c;      
        } else{
            i--;
        }   
    }    
}
writeYourGentes();

function showDB(){
    if(personalMovie.private == false){
        console.log(personalMovie);
    }
}

function rememver() {
    for (let i = 0; i < 2; i++){

        let a = prompt("последний фильм,который вы посмотрели", ""),
            b = prompt("оцените его по 10 бальной шкале", "");    

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovie.movies[a] = b;      
        } else{
            i--;
        }   
    }    
}

rememver();

console.log(personalMovie);

 

/*  function fi (i, a) {
    
    return (i + a);
}

console.log(fi(4, 22));

const c = (a,b) => a + b;

console.log(c(4,7));  */


