import './App.css';
import React from 'react';
import Global from './components/Global.jsx'
import Comparative from './components/Comparative.jsx'
import { ReactComponent as TvIcon } from './tv_icon.svg'

function App() {
  return (
    <div className="App">
      <div className="header-title">
        <TvIcon />
        <h1>Viewership Visualization</h1>
      </div>
      <Global />
      <Comparative />
    </div>
  );
}

export default App;
