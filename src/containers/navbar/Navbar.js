import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/Button/Button'
import { getMovies } from '../../components/actions/movieActions'
import './Navbar.scss'

const Navbar = (props) => {

    return (
        <div className="navbar">
            <div>
                <Button
                    onClick={() => { props.allMovies() }}
                    type="button"
                    buttonStyle="btn--white--outline"
                    buttonSize="btn--small"
                >all</Button>
                <Button
                    onClick={() => { props.ownedMovies() }}
                    type="button"
                    buttonStyle="btn--white--outline"
                    buttonSize="btn--small"
                >owned</Button>
                <Button
                    onClick={() => { props.watchedMovies() }}
                    type="button"
                    buttonStyle="btn--white--outline"
                    buttonSize="btn--small"
                >watched</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies })(Navbar)