import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import SigninForm from './Components/SignUp/SigninForm';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SigninForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
