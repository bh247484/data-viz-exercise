import './App.css';
import React from 'react';
import Global from './components/Global.jsx'
import Comparative from './components/Comparative.jsx'

function App() {

  return (
    <div className="App">
      <h1 className="header-title">Viewership Visualization</h1>
      <Global />
      <Comparative />
    </div>
  );
}

export default App;
