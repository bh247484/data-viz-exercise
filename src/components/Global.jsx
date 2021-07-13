import React, { useState } from 'react'
import CheckboxColumn from './CheckboxColumn.jsx'
import BarCharts from './BarCharts.jsx'
import { titlesList, genresList, networksList, hometownsList } from '../helpers.js'

const Global = () => {
  // States to handle user checkbox input, these arrays are passed onto
  // Bar Chart components where they're used to select for specific data
  const [titles, setTitles] = useState([])
  const [genres, setGenres] = useState([])
  const [networks, setNetworks] = useState([])
  const [hometowns, setHometowns] = useState([])

  // Abstracted method that handles all checkbox inputs and binds them to state
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
  
  return (
    <div className="global-container" style={{ marginBottom: '56px'}}>
      <h1 className="global-title">Global Filter</h1>
      <div style={{display: 'flex', marginBottom: '32px', justifyContent: 'space-between'}}>
        
        {/* Title */}
        <div className="checkbox-column">
          <h2 className="column-name">Title</h2>
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
          <h2 className="column-name">Genre</h2>
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
          <h2 className="column-name">Network</h2>
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
          <h2 className="column-name">Viewer Hometown</h2>
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
      {/* User input/state is passed into the Bar Charts */}
      <BarCharts
          titles={titles}
          genres={genres}
          networks={networks}
          hometowns={hometowns}
      />
    </div>
  )
}

export default Global
