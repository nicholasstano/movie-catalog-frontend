import React from 'react'
import { Button } from '../../components/Button/Button'
import './Pagination.scss'

export const Pagination = ({ totalMovies, moviesPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="paginationDiv">
            {pageNumbers.map(number => (
                <div key={number}>
                    <Button
                        onClick={() => paginate(number)}
                        type="button"
                        buttonStyle="btn--dark--outline"
                        buttonSize="btn--small"
                    >{number < 10 ? `0${number}` : number}</Button>
                </div>
            ))}
        </div>
    )
}
