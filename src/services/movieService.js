import Axios from 'axios'
import storageService from './storageService'

const FAVORITES_KEY = 'favorite-movies'
const BASE_PATH = 'https://swapi.co/api'


async function query() {
  try {
    const res = await Axios.get(`${BASE_PATH}/films`)
    var movies = res.data.results
    movies = _markFavorites(movies)
    return movies
  }
  catch (err) { throw (err) }
}


async function getById(id) {
  try {
    const res = await Axios.get(`${BASE_PATH}/films/${id}`)
    return res.data
  }
  catch (err) { throw (err) }
}



function _markFavorites(movies) {
  const favorites = storageService.loadFromStorage(FAVORITES_KEY) 
  return movies.map(movie => {
      if (!favorites || !favorites.length) {
        movie.isFavorite = false
        return movie
      }
      if ( favorites.some(favorite => favorite === movie.episode_id) ) {
        movie.isFavorite = true
      } else {
        movie.isFavorite = false
      }
      return movie
  })
}


function toggleFavorite(movie) {
  movie.isFavorite = !movie.isFavorite
  var favorites = storageService.loadFromStorage(FAVORITES_KEY) 
  if (!favorites || !favorites.length) favorites = []
  
  if (movie.isFavorite) {
    favorites.push(movie.episode_id)
  } else {
      favorites = favorites.filter(favorite => favorite !== movie.episode_id)
  }
  storageService.saveToStorage(FAVORITES_KEY, favorites)
  return movie
}


export default {
  query,
  toggleFavorite,
  getById
}