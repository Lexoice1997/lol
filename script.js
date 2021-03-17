'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMYFilms: () => {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                rait = prompt('На сколько вы оцените его?', '');
            if (lastFilm != null && rait != null && lastFilm != '' && rait != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rait;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

            while (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            }
            personalMovieDB.genres.push(genre);
        }
        personalMovieDB.genres.forEach((element, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${element}`)
        })
    },
};

