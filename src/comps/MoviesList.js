import React from 'react'
import MovieItem from './MovieItem'



const MoviewList = (props) => {
    const movieItems = props.movies.map(movie => {
    
        return (
            <li key={movie.episode_id} className="movies-list-item">          
                <MovieItem movie={movie} onToggleFavorite={props.onToggleFavorite}/>
            </li>
    )})

    return <ul className="movie-list flex">{movieItems}</ul>
    
}

export default MoviewList
