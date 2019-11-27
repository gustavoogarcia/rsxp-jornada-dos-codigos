import React from 'react'
import HomeHeader from './HomeHeader';
import { useHistory } from 'react-router-dom';
import designImg from '../../imgs/design.svg';
import teamwork from '../../imgs/teamwork.svg';
import rankingImg from '../../imgs/ranking.svg';
import coding from '../../imgs/coding.svg';

export default function Home() {
    const history = useHistory();
    const homeItems = [
        { label: "Lições de Gestão", link: "/list-lesson", imgURL: teamwork },
        { label: "Lições de Códigos", link: "/list-lesson", imgURL: coding },
        { label: "Lições de Design", link: "/list-lesson", imgURL: designImg },
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