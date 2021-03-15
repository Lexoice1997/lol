'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?' , '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?' , '');
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMYFilms() {
	for (let i = 0; i < 2; i++) {
		let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
			rait = prompt('На сколько вы оцените его?', '');
		if (lastFilm != null && rait != null && lastFilm != '' && rait != '' && lastFilm.length < 50) {
			personalMovieDB.movies[lastFilm] = rait;
		} else {
			i--;
		}
	}
};

rememberMYFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		alert ('Вы киноман');
	} else {
		alert ('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB)
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

		personalMovieDB.genres.push(genre)
	}
}

showMyDB();
writeYourGenres();

console.log(personalMovieDB);