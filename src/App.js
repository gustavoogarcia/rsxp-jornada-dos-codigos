import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './store/actions/userActions';
import Home from './Pages/Home';
import CodeLesson from './Pages/CodeLesson';
import DesignLesson from './Pages/DesignLesson';
import Ranking from './Pages/Ranking';

export default function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/code-lesson" component={CodeLesson} />
        <Route path="/design-lesson" component={DesignLesson} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}