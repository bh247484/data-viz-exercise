import React, { useState, useEffect } from 'react'
import CheckboxColumn from './CheckboxColumn.jsx'
import BarCharts from './BarCharts.jsx'
const jsonData = require('../data.json')

const GlobalFilter = (props) => {
  const [titles, setTitles] = useState([])
  const [genres, setGenres] = useState([])
  const [networks, setNetworks] = useState([])
  const [hometowns, setHometowns] = useState([])
  // const [totalViewers, setTotalViewers] = useState()

  // useEffect(() => {
  //   let newTotal = 0
  //   jsonData.forEach((row) => {
  //     if(titles.includes(row.title) || genres.includes(row.genre) || networks.includes(row.network) || hometowns.includes(row.hometown)) {
  //       newTotal += row.numViewers
  //     }
  //   })
  //   setTotalViewers(newTotal)
  // }, [titles, genres, networks, hometowns])

  const handleCheckboxChange = ({ target }) => {

    if (target.dataset.column === 'titles') {
      if (titles.includes(target.value)) {
        const updatedArray = titles.filter(i => i !== target.value)
        setTitles(updatedArray)  
      } else {
        setTitles([...titles, target.value])
      }
    }

    if (target.dataset.column === 'genres') {
      if (genres.includes(target.value)) {
        const updatedArray = genres.filter(i => i !== target.value)
        setGenres(updatedArray)  
      } else {
        setGenres([...genres, target.value])
      }
    }

    if (target.dataset.column === 'networks') {
      if (networks.includes(target.value)) {
        const updatedArray = networks.filter(i => i !== target.value)
        setNetworks(updatedArray)  
      } else {
        setNetworks([...networks, target.value])
      }
    }

    if (target.dataset.column === 'hometowns') {
      if (hometowns.includes(target.value)) {
        const updatedArray = hometowns.filter(i => i !== target.value)
        setHometowns(updatedArray)  
      } else {
        setHometowns([...hometowns, target.value])
      }
    }
    
  }

  const titlesList = ['steelersTonight', 'theDawgPound', 'theExpanse', 'starTrekDiscovery', 'twilightZone', 'crimePatrol', 'forensicFiles']
  const genresList = ['sports', 'scienceFiction', 'mystery']
  const networksList = ['cbs', 'abc', 'syfy']
  const hometownsList = ['pittsburgh', 'newYork', 'boston', 'cleveland']
  
  return (
    <div style={{ marginBottom: '100px'}}>
      <h1>Global Filter</h1>
      <div style={{display: 'flex', marginBottom: '24px', justifyContent: 'space-between'}}>
        
        {/* Title */}
        <div className="checkbox-column">
          <h4>Title</h4>
          {titlesList.map((entry) => (
            <CheckboxColumn
                columnName="titles"
                handleCheckboxChange={handleCheckboxChange}
                inputName={entry}
                stateName={titles}
            />
          ))}
        </div>

        {/* Genre */}
        <div className="checkbox-column">
          <h4>Genre</h4>
          {genresList.map((entry) => (
            <CheckboxColumn
                columnName="genres"
                handleCheckboxChange={handleCheckboxChange}
                inputName={entry}
                stateName={genres}
            />
          ))}
        </div>

        {/* NetWork */}
        <div className="filter-column">
          <h4>Network</h4>
          {networksList.map((entry) => (
            <CheckboxColumn
                columnName="networks"
                handleCheckboxChange={handleCheckboxChange}
                inputName={entry}
                stateName={networks}
            />
          ))}
        </div>

        {/* Hometown */}
        <div className="filter-column">
          <h4>Viewer Hometown</h4>
          {hometownsList.map((entry) => (
            <CheckboxColumn
                columnName="hometowns"
                handleCheckboxChange={handleCheckboxChange}
                inputName={entry}
                stateName={hometowns}
            />
          ))}
        </div>
      </div>
      <BarCharts
          titles={titles}
          genres={genres}
          networks={networks}
          hometowns={hometowns}
      />
    </div>
  )
}

export default GlobalFilter
