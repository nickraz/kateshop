import React from 'react';
import './App.css';
import Top from './Top/Top.jsx'
import Moto from './Moto/Moto.jsx'
import Intro from './Intro/Intro';
import Content from './Content/Content';
import Wedding from './Wedding/Wedding';
import Footer from './Footer/Footer';
import Subfooter from './Footer/Subfooter';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Top />
        <Moto />
        <Intro />
        <Route path="/" component={Content}/>
        <Wedding />
        <Footer />
        <Subfooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
