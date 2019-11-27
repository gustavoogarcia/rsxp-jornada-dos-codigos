import React from 'react'
import HomeHeader from './HomeHeader';
import { useHistory } from 'react-router-dom';
import designImg from '../../imgs/design.svg';
import teamwork from '../../imgs/teamwork.svg';
import rankingImg from '../../imgs/ranking.svg';

export default function Home() {
    const history = useHistory();
    const homeItems = [
        { label: "Lições de Códigos", link: "/code-lesson", imgURL: "" },
        { label: "Lições de Design", link: "/code-lesson", imgURL: designImg },
        { label: "Lições de Gestão", link: "/code-lesson", imgURL: teamwork },
        { label: "Ranking", link: "/ranking", imgURL: rankingImg },
    ]

    return (
        <>
            <HomeHeader />
            <div className="homeItems">
                { homeItems.map(item =>
                    <button className="homeItem" onClick={() => history.push(item.link)}>
                        <img src={item.imgURL} />
                        <p>{item.label}</p>
                    </button>
                )}
            </div>
        </>
    )
}