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
  ],
  actorPrograms: [
    {
      id: 1,
      programId: 1,
      actorId: 5
    },
    {
      id: 2,
      programId: 2,
      actorId: 1
    },
    {
      id: 3,
      programId: 3,
      actorId: 3
    },
    {
      id: 4,
      programId: 4,
      actorId: 4
    },
    {
      id: 5,
      programId: 5,
      actorId: 2
    },
    {
      id: 6,
      programId: 6,
      actorId: 6
    },
    { 
      id: 7,
      programId: 7,
      actorId: 2
    },
    {  
      id: 8,
      programId: 8,
      actorId: 5
    },
    {
      id: 9,
      programId: 9,
      actorId: 1
    },
    {
      id: 10,
      programId: 10,
      actorId: 3
    },
    {
      id: 11,
      programId: 11,
      actorId: 6
    },
    {
      id: 12,
      programId: 12,
      actorId: 2
    },
    {
      id: 13,
      programId: 1,
      actorId: 6
    },
    {
      id: 14,
      programId: 5,
      actorId: 2
    },
    {
      id: 15,
      programId: 6,
      actorId: 3
    },
    {
      id: 16,
      programId: 11,
      actorId: 5
    },
    {
      id: 17,
      programId: 3,
      actorId: 4
    },
    {
      id: 18,
      programId: 7,
      actorId: 3
    },
    {
      id: 19,
      programId: 9,
      actorId: 6
    },
    {
      id: 20,
      programId: 2,
      actorId: 2
    }
  ],
  programGenres: [
    {
      id: 1,
      programId: 1,
      genreId: 2
    },
    {
      id: 2,
      programId: 2,
      genreId: 3
    },
    {
      id: 3,
      programId: 3,
      genreId: 1
    },
    {
      id: 4,
      programId: 4,
      genreId: 6
    },
    {
      id: 5,
      programId: 5,
      genreId: 5
    },
    {
      id: 6,
      programId: 6,
      genreId: 9
    },
    {
      id: 7,
      programId: 7,
      genreId: 4
    },
    {
      id: 8,
      programId: 8,
      genreId: 7
    },
    {
      id: 9,
      programId: 9,
      genreId: 8
    },
    {
      id: 10,
      programId: 10,
      genreId: 8
    },
    {
      id: 11,
      programId: 11,
      genreId: 2
    },
    {
      id: 12,
      programId: 12,
      genreId: 6
    },
    {
      id: 13,
      programId: 1,
      genreId: 4
    },
    {
      id: 14,
      programId: 11,
      genreId: 9
    },
    {
      id: 15,
      programId: 8,
      genreId: 1
    },
    {
      id: 16,
      programId: 6,
      genreId: 5
    },
    {
      id: 17,
      programId: 9,
      genreId: 7
    },
    {
      id: 18,
      programId: 2,
      genreId: 8
    },
    {
      id: 19,
      programId: 3,
      genreId: 1
    },
    {
      id: 20,
      programId: 12,
      genreId: 3
    }
  ],
  genres: [
    {
      id: 1,
      genre: "Mystery"
    },
    {
      id: 2,
      genre: "Drama"
    },
    {
      id: 3,
      genre: "Comedy"
    },
    {
      id: 4,
      genre: "Crime"
    },
    {
      id: 5,
      genre: "Romantic"
    },
    {
      id: 6,
      name: "Sci-Fi"
    },
    {
      id: 7,
      name: "Documentary"
    },
    {
      id: 8,
      name: "Fantasy"
    },    
    {
      id: 9,
      name: "Reality"
    } 
  ],
  users: [
    {
    id: 1,
    fullName: "Clyde Fischer",
    age: 36,
    favGenre: 'Fantasy'
    },
    {
    id: 2,
    fullName: "Big Cliff",
    age: 20,
    favGenre: 'Romantic'
    },
    {
    id: 3,
    fullName: "Stuart Little",
    age: 35,
    favGenre: 'Documentary'
    },
    {
    id: 4,
    fullName: "Billy Tube",
    age: 60,
    faveGenre: 'Crime'
    },
    {
    id: 5,
    fullName: "Pitchie Reynolds",
    age: 40,
    favGenre: 'Comedy'
    }
  ]
}

export const getShows = () => {
  return database.programs.map(program => ({...program}))
}
export const getActors = () => {
  return database.actors.map(actor => ({...actor}))
}
export const getGenres = () => {
  return database.genres.map(genre => ({...genre}))
}
export const getProgramGenres = () => {
  return database.programGenres.map(programGenre => ({...programGenre}))
}
export const getActorPrograms = () => {
  return database.actorPrograms.map(actorProgram => ({...actorProgram}))
}