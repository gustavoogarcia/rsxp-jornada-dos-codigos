import React from 'react';
import { useSelector } from 'react-redux';

export default function RankingCard({info}) {
    const { id } = useSelector(({user}) => user );

    return (
        <div className={`rankingCard ${info.id === id ? "active" : ""}`}>
            <p className="rankingPosition">{info.position}</p>
            <img className="rankingAvatar" src={info.avatar} alt={info.name}/>
            <p className="rankingName">{info.name}</p>
            <p className="rankingPoints">{info.points}</p>
        </div>
    );
};