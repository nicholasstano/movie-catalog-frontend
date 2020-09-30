import { GET_MOVIES, ADD_MOVIE } from "./types"

export const getMovies = () => dispatch => {
    fetch(`http://localhost:8080/movies`)
        .then(response => response.json())
        .then(movies => dispatch({
            type: GET_MOVIES,
            payload: movies
        }))
}

export const addMovie = (newMovie) => dispatch => {
    console.log(newMovie)
    fetch(`http://localhost:8080/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newMovie)
    })
        .then(res => res.json())
        .then(movie => dispatch({
            type: ADD_MOVIE,
            payload: movie
        }))
}