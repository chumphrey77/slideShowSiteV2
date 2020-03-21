import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import './Components/ComponentCSS/ImageCSS.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/MainPages/Home';
import Engagement from './Pages/MainPages/Engagement';
import Wedding from './Pages/MainPages/Wedding';
import DecEighteen from './Pages/MonthPages/2018/Dec2018';
import JanNineteen from './Pages/MonthPages/2019/Jan2019';
import FebNineteen from './Pages/MonthPages/2019/Feb2019';
import MarNineteen from './Pages/MonthPages/2019/Mar2019';
import AprNineteen from './Pages/MonthPages/2019/Apr2019';
import MayNineteen from './Pages/MonthPages/2019/May2019';
import JunNineteen from './Pages/MonthPages/2019/Jun2019';
import JulNineteen from './Pages/MonthPages/2019/Jul2019';
import AugNineteen from './Pages/MonthPages/2019/Aug2019';
import SepNineteen from './Pages/MonthPages/2019/Sep2019';
import OctNineteen from './Pages/MonthPages/2019/Oct2019';
import NovNineteen from './Pages/MonthPages/2019/Nov2019';
import DecNineteen from './Pages/MonthPages/2019/Dec2019';
import JanTwenty from './Pages/MonthPages/2020/Jan2020';
import FebTwenty from './Pages/MonthPages/2020/Feb2020';
import MarTwenty from './Pages/MonthPages/2020/Mar2020';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <Router>
              <Route exact path='/' component={Home} />
              <Route exact path='/Engagement' component={Engagement} />
              <Route exact path='/Wedding' component={Wedding} />
              <Route path='/Dec2018' component={DecEighteen} />
              <Route path='/Jan2019' component={JanNineteen} />
              <Route path='/Feb2019' component={FebNineteen} />
              <Route path='/Mar2019' component={MarNineteen} />
              <Route path='/Apr2019' component={AprNineteen} />
              <Route path='/May2019' component={MayNineteen} />
              <Route path='/Jun2019' component={JunNineteen} />
              <Route path='/Jul2019' component={JulNineteen} />
              <Route path='/Aug2019' component={AugNineteen} />
              <Route path='/Sep2019' component={SepNineteen} />
              <Route path='/Oct2019' component={OctNineteen} />
              <Route path='/Nov2019' component={NovNineteen} />
              <Route path='/Dec2019' component={DecNineteen} />
              <Route path='/Jan2020' component={JanTwenty} />
              <Route path='/Feb2020' component={FebTwenty} />
              <Route path='/Mar2020' component={MarTwenty} />

        </Router>
      </header>
    </div>
  );
}

export default App;
