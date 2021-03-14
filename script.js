let films = prompt('Сколько фильмов вы уже посмотрели?' , '');

let personalMovieDB = {
	count: films,
	movies: {},
	actors: {},
	genres: [],
	privet: false
};

for (let i = 0; i < 2; i++) {
	let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
		rait = prompt('На сколько вы оцените его?', '');
	if (lastFilm != null && rait != null && lastFilm != '' && rait != '' && lastFilm.length < 50) {
		personalMovieDB.movies[lastFilm] = rait;
	} else {
		i--;
	}
}

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	alert ('Вы киноман');
} else {
	alert ('Произошла ошибка');
}

console.log(personalMovieDB);