import React from 'react';
import RankingCard from './RankingCard'

export default function RankingList({list}) {

    return (
        <div className="rankingList">
            {list.map((info) => <RankingCard key={info.position} info={info}/>)}
        </div>
    )
}