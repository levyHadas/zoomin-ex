
import React, { Component, Fragment } from 'react'
import movieService from '../services/movieService'


class MovieDetails extends Component {
    state = { movie:{} }
    
    async componentDidMount() {
        const id = this.props.match.params.id
        try {
            const movie = await movieService.getById(id)
            this.setState({ movie })
        }
        catch (err) { console.log(err) }
    }

    
    render() {
        return (
        <section className = "movie-details">
            {this.state.movie && this.state.movie.episode_id &&
            <Fragment>
                <h1>{this.state.movie.title}</h1>
                <p>{this.state.movie.opening_crawl}</p>
                <p>Director: {this.state.movie.director}</p>
                <p>Producer: {this.state.movie.producer}</p>
                <p>Episode Num.  {this.state.movie.episode_id}</p>
                <p>Release Date.  {this.state.movie.release_date}</p>
            </Fragment>}
        </section>
        )
    }
}
    
export default MovieDetails