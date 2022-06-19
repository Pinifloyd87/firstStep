"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};

const films = prompt('Один из последних просмотренных фильмов?',"");
const films2 = prompt('Один из последних просмотренных фильмов?',"");

const ocenka =prompt('На сколько оцените его?',"");
const ocenka2 =prompt('На сколько оцените его?',"");

personalMovieDB.movies[films] = ocenka;
personalMovieDB.movies[films2]= ocenka2;

console.log(personalMovieDB);




