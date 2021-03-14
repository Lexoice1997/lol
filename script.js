let films = prompt('Сколько фильмов вы уже посмотрели?' , '');
let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let rait = prompt('На сколько вы оцените его?', '');


let personalMovieDB = {
	count: films,
	movies: {},
	actors: {},
	genres: [],
	privet: false
};

personalMovieDB.movies[lastFilm] = rait;

console.log(personalMovieDB)