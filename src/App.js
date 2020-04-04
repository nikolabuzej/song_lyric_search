import React from 'react';

import './App.css';
import {  Provider } from './components/context/Context';
import Header from './components/Header';
import Tracks from './components/Tracks';
import TrackForm from './components/TrackForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Lyrics from './components/Lyrics';
import Index from './components/Index';
function App() {
  return (
    <div className="container">
     <Provider>
       <Router>
      <Header/>
      
      <Switch>
      <Route exact path='/' component={Index}/>
      <Route exact path='/lyrics/track/:id' component={Lyrics}/>
      </Switch>
      </Router>
     </Provider>
    </div>
  );
}

export default App;
