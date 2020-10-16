import { GET_MOVIES, ADD_MOVIE, EDIT_MOVIE } from '../actions/types'

const initialState = {
    movies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case EDIT_MOVIE: 
            return {
                ...state,
                movies: [...state.movies.filter(movie => movie._id !== action.payload._id), action.payload]
            }
        default:
            return state
    }
}