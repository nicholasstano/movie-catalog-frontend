export default { alphabetizeMovies }

function alphabetizeMovies(movies) {
    return movies.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
}
