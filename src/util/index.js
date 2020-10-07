export default { alphabetizeMovies, searchMovies }

function alphabetizeMovies(movies) {
    return movies.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
}

function searchMovies(movies, searchTerm) {
    return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
}