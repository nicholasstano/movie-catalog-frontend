import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import { addMovie } from '../actions/movieActions'
import './movieform.css'

const MovieForm = (props) => {

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

    const [singleDate, setSingleDate] = useState('')

    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event) => {
        if (event.target.name === 'yearReleased') {
            let year = parseInt(event.target.value)
            setNewMovieState({ ...newMovieState, [event.target.name]: year })
        }
        else {
            setNewMovieState({ ...newMovieState, [event.target.name]: event.target.value })
        }
    }

    const handleDateChange = (event) => {
        setSingleDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMovie = {
            dates: [...newMovieState.dates],
            title: newMovieState.title,
            director: newMovieState.director,
            owned: newMovieState.owned,
            imdb: newMovieState.imdb,
            wiki: newMovieState.wiki,
            rottentomatoes: newMovieState.rottentomatoes,
            yearReleased: newMovieState.yearReleased,
        }
        props.addMovie(newMovie)
        setNewMovieState({
            dates: [],
            title: '',
            director: '',
            yearReleased: 0,
            owned: false,
            imdb: '',
            wiki: '',
            rottentomatoes: '',
        })
    }

    const addDate = () => {
        if (singleDate === '') {
            alert("Enter a date in the format 5/9/2020")
        }
        else {
            setNewMovieState({ ...newMovieState, dates: [...newMovieState.dates, singleDate] })
            setSingleDate('')
        }
    }

    const toggleOwn = (event) => {
        event.preventDefault()
        setNewMovieState({ ...newMovieState, owned: !newMovieState.owned })
    }

    console.log(newMovieState)
    return (
        <div className="form">
            {/* <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            /> */}
            <input type="text" name="singleDate" value={singleDate} placeholder="Ex: 5/9/2020" onChange={handleDateChange} />

            <button onClick={addDate}>Add Date Watched</button>
            <form className="" onSubmit={handleSubmit}>
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

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { addMovie })(MovieForm)