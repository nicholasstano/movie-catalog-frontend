import React, { useState } from 'react'

const MovieForm = () => {

    const [newMovieState, setNewMovieState] = useState({
        dates: [],
        title: '',
        director: '',
        yearReleased: 0,
        owned: false,
        imdb: '',
        wiki: '',
        rottentomatoes: '',
    })

    const handleChange = (event) => {
        if (event.target.name === 'yearReleased') {
            let year = parseInt(event.target.value)
            console.log(year)
            setNewMovieState({ ...newMovieState, [event.target.name]: year })
        }
        else {
            setNewMovieState({ ...newMovieState, [event.target.name]: event.target.value })
        }
    }
    console.log(newMovieState)
    return (
        <form className="">
            <ul>
                <input type="text" name="title" value={newMovieState.title} placeholder="title" onChange={handleChange} />
            </ul>
            <ul>
                <input type="text" name="director" value={newMovieState.director} placeholder="director" onChange={handleChange} />
            </ul>
            <ul>
                <input type="number" name="yearReleased" value={newMovieState.yearReleased} placeholder="year released" onChange={handleChange} />
            </ul>
            <ul>
                <input type="text" name="owned" value={newMovieState.owned} placeholder="owned" onChange={handleChange} />
            </ul>
            <ul>
                <input type="text" name="imdb" value={newMovieState.imdb} placeholder="imdb" onChange={handleChange} />
            </ul>
            <ul>
                <input type="text" name="wiki" value={newMovieState.wiki} placeholder="wiki" onChange={handleChange} />
            </ul>
            <ul>
                <input type="text" name="rottentomatoes" value={newMovieState.rottentomatoes} placeholder="rotten tomatoes" onChange={handleChange} />
            </ul>
            <ul>
                <button>Submit</button>
            </ul>
        </form>
    )
}

export default MovieForm
