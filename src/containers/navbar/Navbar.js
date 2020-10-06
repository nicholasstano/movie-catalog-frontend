import React from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../components/actions/movieActions'
import './Navbar.scss'

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div>
                <p onClick={() => { props.allMovies() }}>all</p>
                <p onClick={() => { props.ownedMovies() }}>owned</p>
                <p onClick={() => { props.watchedMovies() }}>watched</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(Navbar)