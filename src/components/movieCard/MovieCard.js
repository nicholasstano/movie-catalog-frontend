import React from 'react'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import images from '../../images'
import './MovieCard.scss'

const MovieCard = (props) => {

    const { title, director, yearReleased, imdb, wiki, rottentomatoes, owned, dates } = props.movie

    const setBoxShadowColor = () => {
        let colors = [
            "blue",
            "red",
            "purple",
            "orange",
            "green",
            "yellow",
            "#FF69B4",
            "teal",
            "#cc5500",
        ]
        if (dates.length) {
            return colors[dates.length - 1]
        }
        else {
            return "black"
        }
    }

    const styles = {
        boxShadow: `0px 25px 50px ${setBoxShadowColor()}`,
    }

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
                month = dateType.getUTCMonth() + 1
                year = dateType.getUTCFullYear()
                dateInMonth = dateType.getUTCDate()
                return stringOfDates = stringOfDates + `${month}/${dateInMonth}/${year}, `
            })
            return stringOfDates.substring(0, stringOfDates.length - 2);
        }
        else {
            return `Have not watched recently or ever.`
        }
    }

    return (
        <div style={styles} className="card">
            <h1 className="cardTitle">{title}</h1>
            <h1 className="director">{director}</h1>
            <h1 className="yearReleased">({yearReleased})</h1>
            <h1 >
                {owned ?
                    <><CheckBoxOutlinedIcon className="ownedCheckbox" /></>
                    :
                    <><CheckBoxOutlineBlankOutlinedIcon className="notOwnedCheckbox" /></>
                }
            </h1>
            <hr />
            <div className="imageIcons">
                <img src={images.imdb} alt='ImdbRedirect' onClick={imdbRedirect} />
                <img src={images.rottentomatoes} alt='RottenTomatoesRedirect' onClick={rottenTomatoesRedirect} />
                <img src={images.wikipedia} alt='WikipediaRedirect' onClick={wikiRedirect} />
            </div>
            <hr />
            <div className="datesWatched">{returnDates()}</div>
        </div >
    )
}

export default MovieCard
