import React from 'react'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import './MovieCard.scss'

const MovieCard = (props) => {

    const { title, director, yearReleased, imdb, wiki, rottentomatoes, owned, dates } = props.movie

    const rottenTomatoesRedirect = () => {
        window.open(rottentomatoes, '_blank')
    }

    const imdbRedirect = () => {
        window.open(imdb, '_blank')
    }

    const wikiRedirect = () => {
        window.open(wiki, '_blank')
    }

    const returnDates = () => {
        let stringOfDates = ''
        if (dates.length > 0) {
            let dateType;
            let month;
            let year;
            let dateInMonth;
            dates.map(date => {
                dateType = new Date(date)
                month = dateType.getMonth() + 1
                year = dateType.getFullYear()
                dateInMonth = dateType.getDate()
                return stringOfDates = stringOfDates + `${month}/${dateInMonth}/${year}, `
            })
            return stringOfDates.substring(0, stringOfDates.length - 2);
        }
        else {
            return `Have not watched recently or ever.`
        }
    }

    return (
        <div className="card">
            <h1>{title} ({yearReleased})</h1>
            <h1>{director}</h1>
            <h1>
                {owned ?
                    <><CheckBoxOutlinedIcon /></>
                    :
                    <><CheckBoxOutlineBlankOutlinedIcon /></>
                }
            </h1>
            <hr />
            <button onClick={rottenTomatoesRedirect}>rotten tomatoes</button>
            <button onClick={imdbRedirect}>imdb</button>
            <button onClick={wikiRedirect}>wiki</button>
            <hr />
            <div className="datesWatched">{returnDates()}</div>
        </div >
    )
}

export default MovieCard
