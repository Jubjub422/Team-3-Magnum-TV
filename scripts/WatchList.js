import { getShows, getGenres, getProgramGenres } from "./database.js"

const shows = getShows()
const genreList = getGenres()
const ProgramGenresJoined = getProgramGenres()


export const WatchList = () => {
    let html = `<ul>`
    for (const show of shows) {
        html += `<li id="show--${show.id}">${show.name}: ${show.time}</li>`
    }

    html += `</ul>`

    return html
}

const filterShows = (show) => {
    const MatchingShow = []
    for (const table of ProgramGenresJoined) {
        if (table.showId === show.id) {
            MatchingShow.push(table)
        }
    }
    return MatchingShow
}

const assignedGenres = (matchedShows) => {
    let showGenres = []
    for (const genre of genreList) {
        for (const match of matchedShows) {
            if (genre.id === match.genreId) {
                showGenres.push(genre.name)
            }
        }
    }
    return showGenres.join(" and ")
}


document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("show")) {

            const [, showPrimaryKey] = itemClicked.id.split("--")

            for (const show of shows) {
                if (parseInt(showPrimaryKey) === show.id) {
                    const matchedShow = filterShows(show)
                    const assignedGenre = assignedGenres(matchedShow)
                    window.alert(`${matchingShow.name} has a genre of ${assignedGenre}!`)
                }
            }
        }
    }
)
