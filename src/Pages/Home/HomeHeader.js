import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsetUser } from '../../store/actions/userActions'
import Logo from '../../Components/Logo';

export default function HomeHeader() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    return (
        <header className="homeHeader">
            <div className="userInfo">
                <button className="exitButton" onClick={() => dispatch(unsetUser())}>Sair</button>
                <p className="homeName">{user.name}</p>
                <p className="homePoints">{user.points}<span> Pontos</span></p>
            </div>
            <Logo />
        </header>
    );
};