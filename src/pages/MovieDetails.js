
import React, { Component, Fragment } from 'react'
import movieService from '../services/movieService'


class ContactDetails extends Component {
    state = {}
    
    async componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        const movie = await movieService.getById(id)
        console.log(movie)
        this.setState({ movie })
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
    
export default ContactDetails;