/*A TV watcher wants to see a list of actors. Just their names. When the actor name is clicked on, the show in which the actor is the star should be display in an alert message. */
import { getActors } from "./database.js"

const actors = getActors()

export const actorsFunction = () => {
    let actorsHtml = "<ul>"

    for (const actor of actors){
        actorsHtml+= `<li id="actor--${actor.id}">${actor.name}</li>`
    }

    actorsHtml += "</ul>"

    return actorsHtml
}