import { backendUrl } from "../../config"
import { GET_MOVIES, ADD_MOVIE } from "./types"

export const getMovies = () => dispatch => {
    fetch(backendUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': "*"
        }
    })
        .then(response => response.json())
        .then(movies => dispatch({
            type: GET_MOVIES,
            payload: movies
        }))
}

export const addMovie = (newMovie) => dispatch => {
    fetch(backendUrl, {
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