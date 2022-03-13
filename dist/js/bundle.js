/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function select() {

    const _apiKey = 'ba2becc0-f421-4ef5-bf44-ebac95a88660',
          apiMyFilm = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

    const selectItem = document.querySelector('.film');

    const listFilms = document.querySelector('.my-list__select');

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
                listFilms.innerHTML = '';
                selectItem.value = '';
             })
        })

        window.addEventListener('click', () => {
            if (listFilms) {
                listFilms.innerHTML = '';
            }
        })
    }

    

}

/* harmony default export */ __webpack_exports__["default"] = (select);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/select */ "./src/js/modules/select.js");
// import listFilms from './modules/listFilms';
// import topFilms from './modules/topFilms';


    //   listFilms();
    //   topFilms();
      (0,_modules_select__WEBPACK_IMPORTED_MODULE_0__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map