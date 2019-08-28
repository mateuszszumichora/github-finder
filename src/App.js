import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import Alert from '../src/components/layout/Alert';
import About from '../src/components/pages/About';
import User from '../src/components/users/User';
import NotFound from './components/pages/NotFound';
import Home from '../src/components/pages/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {

 
  

  return (
    <GithubState>
    <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
          <Alert />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about'component={About} />
            <Route exact path='/user/:login' component={User}/>
            <Route component={NotFound} />
          </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
