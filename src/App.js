import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import NoFoundPage from './components/pages/NotFoundPage';

import {Switch,Route} from 'react-router-dom';
import Details from './components/pages/Details';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/education" component={Education}/>
        <Route path="/details" component={Details}/>

        <Route component={NoFoundPage}/>
      </Switch>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
