import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import './Pagination.scss'

export const Pagination = ({ totalMovies, moviesPerPage, paginate, setSelectedPage, selectedPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i)
    }

    const onClickHandler = (number) => {
        setSelectedPage(number)
        paginate(number)
    }

    return (
        <div className="paginationDiv">
            {pageNumbers.map(number => (
                <div key={number}>
                    <Button
                        onClick={() => onClickHandler(number)}
                        type="button"
                        buttonStyle={selectedPage === number ? "btn--danger--outline" : "btn--dark--outline"}
                        buttonSize="btn--small"
                    >{number < 10 ? `0${number}` : number}</Button>
                </div>
            ))}
        </div>
    )
}
