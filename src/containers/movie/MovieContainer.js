import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard'
import { getMovies } from '../../components/actions/movieActions'
import { Pagination } from '../../components/Pagination/Pagination'
import Navbar from '../navbar/Navbar'
import './MovieContainer.scss'

const MovieContainer = (props) => {

    const [displayMovies, setDisplayMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(100)

    useEffect(() => {
        const fetchMovies = async () => {
            await props.getMovies()
        }
        fetchMovies()
    }, [])

    const { movies } = props.movies

    const ownedMovies = () => {
        setDisplayMovies(movies.filter(movie => movie.owned))
    }

    const watchedMovies = () => {
        setDisplayMovies(movies.filter(movie => movie.dates.length > 0))
    }

    const allMovies = () => {
        setDisplayMovies(movies)
    }

    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage

    const paginate = (number) => setCurrentPage(number)

    return (
        <>
            <Navbar ownedMovies={ownedMovies} watchedMovies={watchedMovies} allMovies={allMovies} />
            <div className='movieList'>
                {displayMovies.slice(indexOfFirstMovie, indexOfLastMovie).map(movie => <MovieCard key={movie._id} movie={movie} />)}
            </div>
            <Pagination paginate={paginate} moviesPerPage={moviesPerPage} totalMovies={displayMovies.length} />
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(MovieContainer)