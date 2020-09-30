import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/movieCard/MovieCard'
import { getMovies } from '../components/actions/movieActions'

const MovieContainer = (props) => {

    useEffect(props.getMovies, [])

    let allMovies = props.movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)

    return (
        <div>
            <h1>Movie Container</h1>
            {allMovies}
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(MovieContainer)