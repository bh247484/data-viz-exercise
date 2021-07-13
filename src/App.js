import './App.css';
import React from 'react';
import GlobalFilter from './components/GlobalFilter.jsx'
import SubSlices from './components/SubSlices.jsx'

function App() {

  return (
    <div className="App">
      <GlobalFilter
          // titles={titles}
          // setTitles={setTitles}
          // genres={genres}
          // setGenres={setGenres}
          // networks={networks}
          // setNetworks={setNetworks}
          // hometowns={hometowns}
          // setHometowns={setHometowns}
      />
      <SubSlices />
    </div>
  );
}

export default App;
