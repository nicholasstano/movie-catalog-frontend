import React from 'react'

const MovieCard = (props) => {
    return (
        <div>
            {props.movie.title}
            {props.movie.yearReleased}
        </div>
    )
}

export default MovieCard
