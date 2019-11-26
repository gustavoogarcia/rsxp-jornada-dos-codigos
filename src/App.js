import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import CodeLesson from './Pages/CodeLesson'
import DesignLesson from './Pages/DesignLesson'
import Ranking from './Pages/Ranking'

export default function Routes() {

  return (
    <>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/code-lesson" component={CodeLesson} />
      <Route path="/design-lesson" component={DesignLesson} />
      <Route path="/ranking" component={Ranking} />
      </Switch>
    </>
  )
}