import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import './Components/ComponentCSS/ImageCSS.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/MainPages/Home';
import Engagement from './Pages/MainPages/Engagement';
import Wedding from './Pages/MainPages/Wedding';
import Calendar from './Pages/MainPages/Calendar';
import Eighteen from './Pages/YearPages/2018';
import Nineteen from './Pages/YearPages/2019';
import Twenty from './Pages/YearPages/2020';
import DecEighteen from './Pages/MonthPages/2018/Dec2018';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <Router>
              <Route exact path='/' component={Home} />
              <Route exact path='/Engagement' component={Engagement} />
              <Route exact path='/Wedding' component={Wedding} />
              <Route exact path='/Calendar' component={Calendar} />
              <Route  path='/2018' component={Eighteen} />
              <Route  path='/2019' component={Nineteen} />
              <Route  path='/2020' component={Twenty} />
              <Route path='/Dec2018' component={DecEighteen} />
        </Router>
      </header>
    </div>
  );
}

export default App;
