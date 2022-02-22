const _apiKey = 'ba2becc0-f421-4ef5-bf44-ebac95a88660';
      apiUrlPopular = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=2'

getPopularFilms(apiUrlPopular)

async function getPopularFilms(url) {
    const res = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            'X-API-KEY': _apiKey,
        },
    })

    const resData = await res.json();
    createCards(resData)
}

function createCards(card) {
    const movies = document.querySelector('.movies');

    card.films.forEach(item => {
        const movie = document.createElement('div')
        movie.classList.add('movie')
        movie.innerHTML = `
        <div class="movie">
            <img src="${item.posterUrl}" alt="${item.nameEn}">
            <div class="movie__name movie__nameEn">${item.nameEn ? item.nameEn : ''}</div>
            <div class="movie__name movie__nameRu">${item.nameEn ? '( ' + item.nameRu + ' )' : item.nameRu}</div>
            <div class="movie__genres">${item.genres.map(genre => `${genre.genre}`)}</div>
            <div class="movie__rating movie__rating_${getRatingColor(item.rating)}">${getRating(item.rating)}</div>
        </div>
        `
        console.log(item.rating)
        movies.appendChild(movie)
    })

}


function getRatingColor(rate) {
    if (rate >= '7') {
        return 'green';
    } else if (rate > '5') {
        return 'orange';
    } else {
        return 'red';
    }
}

function getRating(rate) {
    if (rate.includes('%')) {
        return [rate.substr(0, 1), rate.substr(1, 1)].join('.')
    } else {
        return rate
    }
}



