import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Mainpage from './Components/Mainpage'
import Writing from './Components/Writing'
import Landing from './Components/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        
          <main className='everyRoute'>
            <Route exact path='/'component={Landing} />
            <Route exact path='/mainpage' component={Mainpage} />
            <Route exact path='/writing/:id' component={Writing}/>

          </main>
        
       </Router>
    );
  }
}

export default App;
