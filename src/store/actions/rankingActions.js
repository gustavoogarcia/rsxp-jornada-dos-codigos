export const getRankingList = target => dispatch => {
    const rankingList = [
        {
          id: 1,
          position: 1,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
          name: "Adam",
          points: 502312
        },
        {
          id: 2,
          position: 2,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
          name: "Gabriel",
          points: 457645
        },
        {
          id: 3,
          position: 3,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
          name: "Joseph",
          points: 403424
        },
        {
          id: 4,
          position: 4,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
          name: "Michael",
          points: 374134
        },
        {
          id: 5,
          position: 5,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
          name: "Paul",
          points: 321544
        },
        {
          id: 6,
          position: 6,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
          name: "Raul",
          points: 274543
        },
        {
          id: 7,
          position: 7,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
          name: "Robert",
          points: 253424
        },
        {
          id: 8,
          position: 8,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
          name: "Willian",
          points: 223656
        },
        {
          id: 9,
          position: 9,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
          name: "Jose",
          points: 223656
        },
        {
          id: 10,
          position: 10,
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
          name: "Cat",
          points: 223656
        }
      ];
      
    dispatch({ type: "SET_RANKING_LIST", rankingList })
}

