function select() {

    const _apiKey = 'ba2becc0-f421-4ef5-bf44-ebac95a88660',
          apiMyFilm = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

    const selectItem = document.querySelector('.film'),
          listFilms = document.querySelector('.my-list__select'),
          inputClose = document.querySelector('.new-film__close'),
          movies = document.querySelector('.my-list__items');


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

    function closeInput() {
        if (listFilms.textContent != '') {
            inputClose.style.display = 'block';
        } else {
            inputClose.style.display = 'none';
        }
    }
    
    let moviesStorage = [];

    if (localStorage.getItem('movies')) {
        moviesStorage = JSON.parse(localStorage.getItem('movies'));
        let displayFilm = '';
        moviesStorage.forEach(item => {
            console.log(item);
            
            displayFilm += `
            <div class='display-film'>
                <img src="${item.posterUrl}" alt="${item.nameEn}">
                <div class="movie__name movie__nameEn">${item.nameEn ? item.nameEn : ''}</div>
                <div class="movie__name movie__nameRu">${item.nameEn ? '( ' + item.nameRu + ' )' : item.nameRu}</div>
                <div class="movie__genres">${item.genres.slice(0, 3).map(genre => ` ${genre.genre}`)}</div>
                <div class="movie__rating movie__rating_${getRatingColor(item.rating)}">${getRating(item.rating)}</div>
            </div>
            `
            movies.innerHTML = displayFilm;
        })
        
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
                listFilms.innerHTML = '';
                selectItem.value = '';
                closeInput()
                
                moviesStorage.push(item);
                console.log(moviesStorage);
                localStorage.setItem('movies', JSON.stringify(moviesStorage));
             })
            
        })

        window.addEventListener('click', (e) => {
            if (listFilms && !e.target.closest('.film')) {
                listFilms.innerHTML = '';
            }
            closeInput()
        })

        closeInput()
        console.log(movies);
    }
}

export default select;