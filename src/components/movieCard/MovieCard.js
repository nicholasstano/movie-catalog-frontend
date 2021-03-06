import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editMovie } from '../actions/movieActions'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import MovieIcon from '@material-ui/icons/Movie';
import images from '../../images'
import './MovieCard.scss'

const MovieCard = (props) => {

    const { _id, reelGood, title, director, yearReleased, owned, dates } = props.movie

    const colorsBasedOnTimesWatched = () => {
        let colors = [
            "#8AB8FF",
            "#FF6D6D",
            "#D36DFF",
            "#FFBF6D",
            "#6DFF88",
            "#FFFB6D",
            "#FF6DED",
            "#6DFFF4",
            "#D5FF6D",
        ]
        if (dates.length) {
            return colors[dates.length - 1]
        }
        else {
            return "#FFFFFF"
        }
    }

    const styles = {
        boxShadow: `0px 25px 50px ${'black'}`,
    }

    const reelGoodRedirect = () => {
        window.open(reelGood, '_blank')
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

    const handleEditSubmit = (event) => {
        event.preventDefault()
        let newTitleArray = title.split(" ")
        let newTitleString = ''
        for (let string of newTitleArray) {
            newTitleString = newTitleString + string.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"") + '-'
        }
        const updatedMovie = {
            dates: [...dates],
            title: title,
            director: director,
            owned: owned,
            yearReleased: yearReleased,
            reelGood: `https://reelgood.com/movie/${newTitleString}${yearReleased}`
        }
        console.log(updatedMovie)
        props.editMovie(_id, updatedMovie)
        props.history.push('/')
    }

    return (
        <div className="card" style={{ borderBottom: `1px solid ${colorsBasedOnTimesWatched()}`}}>
            <div className="cardInformation">
            <h1 className="cardTitle" style={{ color: colorsBasedOnTimesWatched()}}>{title}</h1>
            <h1 className="director">{director}</h1>
            <h1 className="yearReleased">({yearReleased})</h1>
                {owned ?
                    <><CheckBoxOutlinedIcon className="ownedCheckbox" /></>
                    :
                    <><CheckBoxOutlineBlankOutlinedIcon className="notOwnedCheckbox" /></>
                }
            <hr />
            <div className="movieViewIcon">
                <MovieIcon className="movieIcon" onClick={reelGoodRedirect}></MovieIcon>
            </div>
            </div>
            <hr />
            <div className="datesWatched">{returnDates()}</div>
        </div >
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default withRouter(connect(mapStateToProps, { editMovie })(MovieCard))