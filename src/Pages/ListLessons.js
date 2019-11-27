import React from 'react';
import Icon6 from '../imgs/final.png';
import Icon5 from '../imgs/5.png'
import Icon4 from '../imgs/4.png'
import Icon3 from '../imgs/3.png'
import Icon2 from '../imgs/2.png'
import Icon1 from '../imgs/1.png'
import '../styles/ListLessons.scss';
import HomeHeader from './Home/HomeHeader';
import { useHistory } from 'react-router-dom';

export default function ListLessons() {
  const history = useHistory();

  const exercices = [
    { label: "Exercício 1", imgURL: Icon1, link: "/"},
    { label: "Exercício 2", imgURL: Icon2, link: "/"},
    { label: "Exercício 3", imgURL: Icon3, link: "/"},
    { label: "Exercício 4", imgURL: Icon4, link: "/"},
    { label: "Exercício 5", imgURL: Icon5, link: "/"},
    { label: "Desafio", imgURL: Icon6, link: "/"},    
  ]
  return (
    <>
      <HomeHeader/>
      <div className="exercice firstExercice" onClick={() => history.push('/design-lesson')}>
        <img src={exercices[0].imgURL} alt={exercices[0].label}/>
        <p>{exercices[0].label}</p>
      </div>
      <div className="exercices">
        { exercices.filter((exercice, index) => index !== 0  && index !== exercices.length -1).map(exercice => 
          <div className="exercice" onClick={() => history.push('/design-lesson')}>
            <img src={exercice.imgURL} alt={exercice.label}/>
            <p>{exercice.label}</p>
          </div>
        )}
      </div>
      <div className="exercice finalExercice" onClick={() => history.push('/design-lesson')}>
        <img src={exercices[exercices.length -1].imgURL} alt={exercices[0].label}/>
        <p>{exercices[exercices.length -1 ].label}</p>
      </div>
    </>
  );
}
