import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Top/Top.jsx'
import Moto from './Moto/Moto.jsx'
import Intro from './Intro/Intro';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <Top />
      <Moto />
      <Intro />
      <Content header="Популярные товары"/>
    </div>
  );
}

export default App;
