import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard'
import { getMovies } from '../../components/actions/movieActions'
import './MovieContainer.scss'

const MovieContainer = (props) => {

    useEffect(props.getMovies, [])

    let allMovies = props.movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)

    return (
        <div className='movieList'>
            {allMovies}
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(MovieContainer)