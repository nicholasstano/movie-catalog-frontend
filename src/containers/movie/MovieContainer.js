import React, { Component, useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard'
import { getMovies } from '../../components/actions/movieActions'
import './MovieContainer.scss'
import Navbar from '../navbar/Navbar'

// class MovieContainer extends Component {

//     componentDidMount() {
//         this.props.getMovies()
//         console.log(this.props)
//     }

//     render() {
//         const { movies } = this.props.movies
//         console.log(this.props.movies.movies, movies)
//         return (
//             <div>

//             </div>
//         )
//     }
// }

const MovieContainer = (props) => {

    const [toggleDisplay, setToggleDisplay] = useState(false)
    const [displayMovies, setDisplayMovies] = useState([])

    useEffect(() => {
        props.getMovies()
    }, [])

    const { movies } = props.movies

    console.log(props.movies.movies, displayMovies, movies.filter(movie => movie.owned))

    const ownedMovies = () => {
        setToggleDisplay(true)
        setDisplayMovies(movies.filter(movie => movie.owned))
    }

    const watchedMovies = () => {
        setToggleDisplay(true)
        setDisplayMovies(movies.filter(movie => movie.dates.length > 0))
    }

    const allMovies = () => {
        setToggleDisplay(false)
    }

    return (
        <>
            <Navbar ownedMovies={ownedMovies} watchedMovies={watchedMovies} allMovies={allMovies} />
            <div className='movieList'>
                {toggleDisplay ?
                    displayMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                    :
                    movies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(MovieContainer)