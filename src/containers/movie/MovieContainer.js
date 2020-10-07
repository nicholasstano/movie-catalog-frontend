import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard'
import { getMovies } from '../../components/actions/movieActions'
import { Pagination } from '../../components/Pagination/Pagination'
import Navbar from '../navbar/Navbar'
import SearchBar from '../../components/searchBar/SearchBar'
import util from '../../util'
import './MovieContainer.scss'

const MovieContainer = (props) => {

    const [displayMovies, setDisplayMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(21)
    const [movieSearchTerm, setMovieSearchTerm] = useState('')

    useEffect(() => {
        // const fetchMovies = async () => {
        //     await props.getMovies()
        // }
        // fetchMovies()
        props.getMovies()
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

    const onChange = (searchTerm) => {
        setMovieSearchTerm(searchTerm)
    }

    const searchMovie = () => {
        return util.searchMovies(displayMovies, movieSearchTerm)
    }


    return (
        <>
            {movies.length > 0 && displayMovies.length === 0 && setDisplayMovies(props.movies.movies)}
            <Navbar ownedMovies={ownedMovies} watchedMovies={watchedMovies} allMovies={allMovies} />
            <div className="searchBarAndPagination">
                <SearchBar onChange={onChange} />
                <Pagination key={indexOfLastMovie} paginate={paginate} moviesPerPage={moviesPerPage} totalMovies={movieSearchTerm === '' ? displayMovies.length : searchMovie().length} />
            </div>
            <div className='movieList'>
                {searchMovie().slice(indexOfFirstMovie, indexOfLastMovie).map(movie => <MovieCard key={movie._id} movie={movie} />)}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(MovieContainer)