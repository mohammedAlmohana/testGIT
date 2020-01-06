import React from 'react';
import './App.css';
import Lifcycle from './components/Lifecycle';
import Header from './components/Header'
import Memgen from './components/Memgen'
import memes from './components/Data/memes'

function App() {
  return (
    <div className="App">
     <Lifcycle/>
     <Header/>
     { 
      memes.map((meme)=>
      <Memgen title={meme.title}>
      </Memgen>)
      }
     
    </div>
  );
}

export default App;
