import React from 'react'

export default function RankingInfo({info}) {

    return (
        <div className="rankingInfo">
            <p className="rankingPosition">{info.position}<sup>o</sup></p>
            <img className="rankingAvatar" src={info.avatar} alt={info.name}/>
            <p className="rankingPoints">{info.points}<span>Pontos</span></p>
        </div>
    )
}