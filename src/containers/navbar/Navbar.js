import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/Button/Button'
import { getMovies } from '../../components/actions/movieActions'
import './Navbar.scss'

const Navbar = (props) => {

    const [selected, setSelected] = useState('none')

    return (
        <div className="navbar">
            <div>
                <Button
                    onClick={() => { 
                        setSelected('all')
                        props.allMovies() 
                    }}
                    type="button"
                    buttonStyle={selected === 'all' ? "btn--danger--outline" : "btn--white--outline"}
                    buttonSize="btn--small"
                >all</Button>
                <Button
                    onClick={() => { 
                        setSelected('owned')
                        props.ownedMovies() 
                    }}
                    type="button"
                    buttonStyle={selected === 'owned' ? "btn--danger--outline" : "btn--white--outline"}
                    buttonSize="btn--small"
                >owned</Button>
                <Button
                    onClick={() => { 
                        setSelected('watched')
                        props.watchedMovies() 
                    }}
                    type="button"
                    buttonStyle={selected === 'watched' ? "btn--danger--outline" : "btn--white--outline"}
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