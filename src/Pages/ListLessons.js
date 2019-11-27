import React from 'react';
import { PageHeader } from 'antd';
import '../styles/ListLessons.scss';

export default function ListLessons({ history }) {
  const exercices = [
    { label: "teste1", imgURL: "", link: "/"},
    { label: "teste2", imgURL: "", link: "/"},
    { label: "teste3", imgURL: "", link: "/"},
    { label: "teste4", imgURL: "", link: "/"},
    { label: "teste5", imgURL: "", link: "/"},
    { label: "teste6", imgURL: "", link: "/"},    
  ]
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
          backgroundColor: '#7baa4a',
          color: '#fff'
          }}
          onBack={() => history.push('/')}
          title="Problemas"
      />
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
