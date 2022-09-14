import { WatchList } from "./WatchList.js"

const mainContainer = document.querySelector("#content");

const applicationHTML = `
<h1>Magnum TV</h1>

<article class="watchlist">
<section class="detail--column list details__watchlist">
    <h2>Watch List</h2>
    ${WatchList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

/* 
  Magnum TV is a new service that wil revolutionize the way
  people watch television. Here's what the business team has
  hired us to do. As users are added to the system, they will
  tell us what their favorite genre of show is (comedy, action,
  thriller, etc...). The web application must list all of the 
  shows that are on our service, and then also list each user.

  For each user, list all of the shows that we recommend they
  watch based on their recorded favorite genre.


  Requirements:
    * Have an array of users who watch TV. Each user will have
        a name, an age, and favorite genre.
    * Have an array of TV shows. Each show will have a title,
        star actor name, genre, and original air date.
    * Have an array of all possible genres.
    * When displaying users, show their name as a header, and
        all recommended shows underneath.
    * When displaying shows, show the title, genre name, and
        star actor for the show.
*/
