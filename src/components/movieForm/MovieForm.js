import React, { useState } from 'react'
import DatePicker from "react-datepicker";

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

    const [startDate, setStartDate] = useState(new Date());

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

    const addDate = () => {
        let month = startDate.getMonth() + 1
        let day = startDate.getDate()
        let year = startDate.getFullYear()
        setNewMovieState({ ...newMovieState, dates: [...newMovieState.dates, `${month}/${day}/${year}`] })
    }

    const toggleOwn = (event) => {
        event.preventDefault()
        setNewMovieState({ ...newMovieState, owned: !newMovieState.owned })
    }

    console.log(newMovieState)
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
            <button onClick={addDate}>Add Date Watched</button>
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
                    <input type="hidden" name="owned" value={newMovieState.owned} placeholder="owned" />
                    <button onClick={toggleOwn}>{newMovieState.owned ? 'Do Not Own' : 'Own'}</button>
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
        </div>
    )
}

export default MovieForm
