export const getRankingList = target => dispatch => {
    const rankingList = [
        { id: 2, position: 1, avatar: '', name: `${target}1`, points: 502312 },
        { id: 3, position: 2, avatar: '', name: `${target}2`, points: 457645 },
        { id: 1, position: 3, avatar: '', name: `${target}3`, points: 403424 },
        { id: 4, position: 4, avatar: '', name: `${target}4`, points: 374134 },
        { id: 5, position: 5, avatar: '', name: `${target}5`, points: 321544 },
        { id: 6, position: 6, avatar: '', name: `${target}6`, points: 274543 },
        { id: 7, position: 7, avatar: '', name: `${target}7`, points: 253424 },
        { id: 8, position: 8, avatar: '', name: `${target}8`, points: 223656 },
        { id: 9, position: 9, avatar: '', name: `${target}9`, points: 223656 },
        { id: 10, position: 10, avatar: '', name: `${target}10`, points: 223656 },
    ];
    dispatch({ type: "SET_RANKING_LIST", rankingList })
}