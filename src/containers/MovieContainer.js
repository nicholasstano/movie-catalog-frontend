import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const MovieContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/movies`)
            .then(res => res.json())
            .then(result => {
                setMovies([...result])
            })
    }, [movies])

    let allMovies = movies.map(movie => <MovieCard key={movie._id} movie={movie} />)

    return (
        <div>
            <h1>Movie Container</h1>
            {allMovies}
        </div>
    )
}

export default MovieContainer
