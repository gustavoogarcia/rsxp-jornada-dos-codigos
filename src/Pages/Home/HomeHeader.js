import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsetUser } from '../../store/actions/userActions'
import Logo from '../../Components/Logo';
import { useLocation, useHistory } from 'react-router-dom';

export default function HomeHeader() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { user } = useSelector((state) => state);
    console.log(history)
    return (
        <header className="homeHeader">
            <div className="userInfo">
                <button className="exitButton" onClick={() => { location.pathname === "/" ? dispatch(unsetUser()) : history.goBack()}}>
                { location.pathname === "/" ? "Sair" : "Voltar" }
                </button>
                <p className="homeName">{user.name}</p>
                <p className="homePoints">{user.points}<span> Pontos</span></p>
            </div>
            <Logo />
        </header>
    );
};