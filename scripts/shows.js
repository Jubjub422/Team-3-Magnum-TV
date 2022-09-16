import { getShows } from './database.js'

const shows = getShows()
//Have a blank shows function inside the module as well. Be sure to paste instructions at the top of the module!

export const showsFunction = () => {
    let showsHtml = "<ul>"

    for (const show of shows){
        showsHtml+= `<li id="show--${show.id}">${show.name}</li>`
    }

    showsHtml += "</ul>"

    return showsHtml
}