import React from 'react'
import './MovieCard.scss'

const MovieCard = (props) => {
    const { title, director, yearReleased, imdb, wiki, rottentomatoes, owned } = props.movie
    return (
        <div className="card">
            <p>{title} ({yearReleased}) </p>
            <ul>
                <p>{director}</p>
                <p>{owned ? 'Own It' : 'Do Not Own'}</p>
            </ul>
            <ul>
                <p><a href={rottentomatoes} rel="noopener noreferrer" target="_blank">rotten tomatoes</a></p>
                <p><a href={imdb} rel="noopener noreferrer" target="_blank">imdb</a></p>
                <p><a href={wiki} rel="noopener noreferrer" target="_blank">wiki</a></p>
            </ul>
        </div>
    )
}

export default MovieCard
