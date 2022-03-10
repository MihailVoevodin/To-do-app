function select() {

    const _apiKey = 'ba2becc0-f421-4ef5-bf44-ebac95a88660',
          apiMyFilm = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

    const selectItem = document.querySelector('.film');

    const listFilms = document.querySelector('.films-list');

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

    selectItem.addEventListener('keyup', () => {
        const inputValue = selectItem.value,
              api = `${apiMyFilm}${inputValue}`;   
        listFilms.innerHTML = '';
        getFilm(api);
    })


    async function getFilm(url) {
        const res = await fetch(url, {
            headers: {
                'Content-type': 'application/json',
                'X-API-KEY': _apiKey,
            },
        })

        const resData = await res.json();
        resData.films.slice(0, 6).forEach(item => {
            const film = document.createElement('li');
            film.classList.add('film-item')
            film.innerHTML = `
                ${item.nameRu}  
            `
            listFilms.appendChild(film);
            film.addEventListener('click', () => {
                console.log(item);
                const movie = document.createElement('li');
                const movies = document.querySelector('.my-list__items');
                movie.classList.add('movie')
                movie.innerHTML = `
                <div>
                    <img src="${item.posterUrl}" alt="${item.nameEn}">
                    <div class="movie__name movie__nameEn">${item.nameEn ? item.nameEn : ''}</div>
                    <div class="movie__name movie__nameRu">${item.nameEn ? '( ' + item.nameRu + ' )' : item.nameRu}</div>
                    <div class="movie__genres">${item.genres.slice(0, 3).map(genre => ` ${genre.genre}`)}</div>
                    <div class="movie__rating movie__rating_${getRatingColor(item.rating)}">${getRating(item.rating)}</div>
                </div>
                `
                movies.appendChild(movie);
             })
        })
    }

    

}

export default select;