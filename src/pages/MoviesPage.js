import React, {Component} from 'react'
import movieService from '../services/movieService'
import MoviesList from '../comps/MoviesList'


class HomeComp extends Component {
    state = {}
       

    async componentDidMount() {
        var movies = await movieService.query()
        this.setState({movies})
        
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
                <MoviesList movies={this.state.movies} onToggleFavorite={this.toggleFavorite}/>}
              
            </section>
        )
    }
}

export default HomeComp;