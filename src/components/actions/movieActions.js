import { backendUrl } from "../../config"
import { GET_MOVIES, ADD_MOVIE, EDIT_MOVIE } from "./types"
import util from '../../util'

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
            payload: util.alphabetizeMovies(movies)
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

export const editMovie = (id, editedMovie) => dispatch => {
    fetch(`http://localhost:8080/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(editedMovie)
    })
        .then(res => res.json())
        .then(movie => dispatch({
            type: EDIT_MOVIE,
            payload: movie
        }))
}