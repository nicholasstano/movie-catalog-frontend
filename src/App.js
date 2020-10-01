import React, { } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import MovieForm from './components/movieForm/MovieForm';
import MovieContainer from './containers/MovieContainer';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/forms" render={() => {
          return (
            <MovieForm />
          )
        }} />
        <Route path="/" render={() => {
          return (
            <MovieContainer />
          )
        }} />
      </Switch>
    </div>
  );
}

export default withRouter(App);