import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = ({ movie, onToggleFavorite }) => {
  
  let isFavorite = (movie.isFavorite) ? " red" : " white"
  var favoriteClass = "fas fa-heart" + isFavorite
  const linkTo =`/movie/${movie.episode_id}`
  return (
  <div className="movie-item flex">
    <Link to={linkTo}>
      <h2>{movie.title}</h2>
    </Link>
    <p>Director: {movie.director}</p>

    <p>Producer: {movie.producer}</p>
    <p>Episode Num.  {movie.episode_id}</p>
    <p>Release Date.  {movie.release_date}</p>
    <i className={favoriteClass} onClick={() => onToggleFavorite(movie)}></i>
  </div>
)
}

export default ContactItem