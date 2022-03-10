// function listFilms() {
    // const _apiKey = 'ba2becc0-f421-4ef5-bf44-ebac95a88660',
    //       apiMyFilm = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
    
//     let listFilms = document.querySelector('.films-list');

//     const addFilm = document.querySelector('.film'),
//         addBtn = document.querySelector('.add');


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

//     let films = [];

//     if (localStorage.getItem('listFilms')) {
//         films = JSON.parse(localStorage.getItem('listFilms'));
//         setFilm();
//     }

//     addBtn.addEventListener('click', () => {
//     let film = {
//             name: addFilm.value,
//         }

//         films.push(film);
//         setFilm();
//         localStorage.setItem('listFilms', JSON.stringify(films));
//         addFilm.value = '';
//     })


//     function setFilm() {
//         let displayFilm = '';
//         films.forEach((item) => {
//             displayFilm += `
//             <li class='learn-more'>
//             ${item.name}
//             </li>
//             `
//             listFilms.innerHTML = displayFilm;
//         })

//     }
//     //get film
//     const learnMore = document.querySelectorAll('.learn-more');
//     console.log(learnMore);

//     learnMore.forEach(item => {
        
//         const content = item.textContent;
           
//         item.addEventListener('click', (e) => {
//         console.log('123')
        // const movie = document.createElement('div')
//             e.preventDefault();

//             movie.innerHTML = '';
    
//             const api = `${apiMyFilm}${content}`

            // async function getFilm(url) {
            //     const res = await fetch(url, {
            //         headers: {
            //             'Content-type': 'application/json',
            //             'X-API-KEY': _apiKey,
            //         },
            //     })
        
            //     const resData = await res.json();
            //     console.log(resData.films[0]);
            //     createCard(resData.films[0])
            // }
            
            

//             function createCard(item) {
                    
                    
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
//             }
//             getFilm(api);
//             item.appendChild(movie)
//         })

//     })


// }

// export default listFilms;