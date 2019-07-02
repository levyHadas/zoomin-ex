import React, {Component} from 'react'
import movieService from '../services/movieService'
import MoviesList from '../comps/MoviesList'


class MoviesPage extends Component {
    
    state = { movies:[] }
       
    async componentDidMount() {
        try {
            var movies = await movieService.query()
            this.setState({movies})
        }
        catch (err) {
            console.log(err)
        }
    }

    toggleFavorite = (movieToLike) => {
        var likedMovie = movieService.toggleFavorite(movieToLike)
        var movies = this.state.movies
        var likedIdx = movies.findIndex(movie => movie.episode_id === likedMovie.episode_id)
        movies[likedIdx] = likedMovie
        this.setState({movies})
    } 
    
    render() {
        return (
            <section className="movies">
                {this.state.movies &&
                <MoviesList movies={this.state.movies} 
                    onToggleFavorite={this.toggleFavorite}/>}
            </section>
        )
    }
}

export default MoviesPage