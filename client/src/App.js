import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import SignUpForm from './Components/SignUp/SignUpForm';
import SignIn from './Components/Signin/SignIn';

const App = () => {
  // const isAuth = useSelector(state => state.isAuth);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={SignUpForm} />
        <Route exact path='/login' render={() => <SignIn />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
