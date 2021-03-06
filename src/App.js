import React, { } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import FormContainer from './containers/form/FormContainer';
import MovieContainer from './containers/movie/MovieContainer';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/forms" render={() => {
          return (
            <FormContainer />
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