"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};

const films = prompt('Один из последних просмотренных фильмов?', ""),
      ocenka = prompt('Один из последних просмотренных фильмов?', ""),

      films2 =prompt('На сколько оцените его?', ""),
      ocenka2 =prompt('На сколько оцените его?', "");

personalMovieDB.movies[films] = ocenka;
personalMovieDB.movies[films2]= ocenka2;

console.log(personalMovieDB);




