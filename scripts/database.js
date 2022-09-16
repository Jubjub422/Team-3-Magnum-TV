const database = {
  actors: [
    {
      id: 1,
      name: "Arnold Swartz"
    },
    {
      id: 2,
      name: "Til Murray"
    },
    {
      id: 3,
      name: "Jim Ferry"
    },
    {
      id: 4,
      name: "John Mandy"
    },
    {
      id: 5,
      name: "Joe Goodman"
    },
    {
      id: 6,
      name: "Eddie Nurphy"
    }
  ],

  programs: [
    {
      id: 1,
      name: "Matlock",
      time: "Mondays @ 5:30pm"
    },
    {
      id: 2,
      name: "Murder, She Wrote",
      time: "Saturdays @ 2:00pm"
    },
    {
      id: 3,
      name: "Columbo",
      time: "Wednesdays @ 5:30pm"
    },
    {
      id: 4,
      name: "Magnum P.i.",
      time: "Thursdays @ 6:30pm"
    },
    {
      id: 5,
      name: "Starsky & Hutch",
      time: "Fridays @ 5:30pm"
    },
    {
      id: 6,
      name: "Miami Vice",
      time: "Tuesdays @ 7:00pm"
    },
    {
      id: 7,
      name: "Hawaii Five-0",
      time: "Sundays @ 6:00pm"
    },
    {
      id: 8,
      name: "Dragnet",
      time: "Mondays @ 6:30pm"
    },
    {
      id: 9,
      name: "MacGyver",
      time: "Thursdays @ 7:30pm"
    },
    {
      id: 10,
      name: "True Blue",
      time: "Wednesdays @ 6:30pm"
    },
    {
      id: 11,
      name: "Police Squad!",
      time: "Tuesdays @ 6:00pm"
    },
    {
      id: 12,
      name: "Knight Rider",
      time: "Sundays @ 7:00pm"
    }
  ]
}

export const getShows = () => {

  return null
}

export const getActors = () => {
  return database.actors.map(actor => ({...actor}))
}