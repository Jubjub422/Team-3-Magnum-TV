import { getShows } from "./database.js"

const shows = getShows()

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }


export const WatchList = () => {
    let html = `<ul>`
    let RandomDate = randomDate(new Date(2022, 0, 1), new Date())
    for (const show of shows) {
        html += `<li id="show--${show.id}">${show.name} @ ${RandomDate}</li>`
    }

    html += `</ul>`

    return html
}

document.addEventListener(
    "click", 
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("show")) {

            const [,showPrimaryKey] = itemClicked.id.split("--")

            let matchingShow = null
            for (const show of shows) {
                if (parseInt(showPrimaryKey) === show.id) {
                    matchingShow = show
                }
            }

            window.alert(`${matchingShow.name} has a genre of ${matchingShow.type}!`)
        }
    }

)
