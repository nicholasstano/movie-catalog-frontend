import { GET_MOVIES } from "./types"

export const getMovies = () => dispatch => {
    fetch(`http://localhost:8080/movies`)
        .then(response => response.json())
        .then(movies => dispatch({
            type: GET_MOVIES,
            payload: movies
        }))
}