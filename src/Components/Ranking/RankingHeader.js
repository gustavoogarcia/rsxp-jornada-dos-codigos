import React from 'react';
import RankingInfo from './RankingInfo';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function RankingHeader({ viewBy, setViewBy }) {
    const history = useHistory();
    const { user } = useSelector((state) => state );

    return (
        <header className="rankingHeader">
            <div className="rankingHeaderButtons">
                <button className="backButton" onClick={() => history.push("/")}>Voltar</button>
                <button className="changeButton" onClick={() => setViewBy(viewBy === "school" ? "student" : "school")} >
                    {viewBy === "school" ? "Ver por escola" : "Ver por usuário"}
                </button>
            </div>
            <h1 className="rankingHeaderTitle">Ranking por {viewBy === "school" ? "Escolas" : "Alunos"}</h1>
            <RankingInfo info={viewBy === "school" ? user.scholl : user } />
        </header>
    );
};