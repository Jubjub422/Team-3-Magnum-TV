const database = {
  actors : [
    {
      id:1,
      name:"Arnold Swartz"
    },
    {
      id:2,
      name: "Til Murray"
    },
    {
      id:3,
      name:"Jim Ferry"
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

  ]

}

export const getShows = () => {

  return null
}