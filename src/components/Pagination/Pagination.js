import React from 'react'

export const Pagination = ({ totalMovies, moviesPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
