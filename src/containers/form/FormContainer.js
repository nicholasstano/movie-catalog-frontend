import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MovieForm from '../../components/movieForm/MovieForm'
import './FormContainer.scss'

const FormContainer = (props) => {

    const [pseudoUser, setPseudoUser] = useState(false)
    const [code, setCode] = useState('')

    const handleChange = (event) => {
        setCode(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (code === '8675309song') {
            setPseudoUser(true)
        }
        else {
            props.history.push('/')
        }
    }

    return (
        <div className="formsContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" value={code} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            {pseudoUser ? <MovieForm /> : null}
        </div>
    )
}

export default withRouter(FormContainer)
