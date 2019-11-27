import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CodeLesson from './Pages/CodeLesson';
import DesignLesson from './Pages/DesignLesson';
import Ranking from './Pages/Ranking/Ranking';
import Login from './Pages/Login/Login';
import { useSelector } from 'react-redux';

export default function Routes() {

  const { isLoggedIn } = useSelector(({ user }) => user);

  return (
    <Switch>
      <Route exact path="/" component={isLoggedIn ? Home : Login} />
      {isLoggedIn ? <Route path="/code-lesson" component={CodeLesson} /> : <Redirect to={"/"} />}
      {isLoggedIn ? <Route path="/design-lesson" component={DesignLesson} /> : <Redirect to={"/"} />}
      {isLoggedIn ? <Route path="/ranking" component={Ranking} /> : <Redirect to={"/"} />}
    </Switch>
  )
}