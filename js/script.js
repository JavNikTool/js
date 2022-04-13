"use strict";

/* function countingOfFilms(){
    
}

countingOfFilms(); */

const personalMovie = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    private: true,
    start: function() {
        personalMovie.count = +prompt("сколько фильмов вы посмотрели?", "");
        while(personalMovie.count == '' || personalMovie.count == null || isNaN(personalMovie.count)){
            personalMovie.count = +prompt("сколько фильмов вы посмотрели?", "");
        }
        if(personalMovie.count > 50) {
            console.log('вы киноман!');
        } else if (personalMovie.count < 50) {
            console.log('просмотрено слишком мало фильмов');
        }else{
            console.log('произошла ошибка');
        }
    },
    writeYourGentes: function(){
        for (let i = 1; i < 4; i++){
            let c = prompt(`ваш любимый жанр под номером ${i}`);
            if (c != null && c != '' && c.length < 15) {
            personalMovie.genres[i - 1] = c;      
            } else{
                i--;
            }   
        }
        personalMovie.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i+1}: ${item}`);
        });
    },
    rememver: function() {
        for (let i = 0; i < 2; i++){
    
            let a = prompt("последний фильм,который вы посмотрели", ""),
                b = prompt("оцените его по 10 бальной шкале", "");    
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovie.movies[a] = b;      
            } else{
                i--;
            }   
        }    
    },
    showDB: function(){
        if(personalMovie.private == false){
            console.log(personalMovie);
        }
    },
    toggleVisibleDB: function() {
        if(personalMovie.private){
            personalMovie.private = false;
        }else if(personalMovie.privat){
            personalMovie.private = true;
        }
    }
};
personalMovie.start();
personalMovie.writeYourGentes();
personalMovie.rememver();
personalMovie.toggleVisibleDB();
personalMovie.showDB();




/*  function fi (i, a) {
    
    return (i + a);
}

console.log(fi(4, 22));

const c = (a,b) => a + b;

console.log(c(4,7));  */
