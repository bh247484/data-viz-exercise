import React, { useState } from 'react'
import CircleChart from './CircleChart.jsx'

const Comparative = () => {
  const [category, setCategory] = useState('network')
  const [categoryKey, setCategoryKey] = useState('cbs')
  const subOptions = ['hometown', 'title', 'network', 'genre']
  
  // Used below on line 70 to ensure there's a default entry for secondary selects
  const initSubs = {
    title: 'steelersTonight',
    genre: 'sports',
    network: 'cbs',
    hometown: 'pittsburgh'
  }

  // Changes secondary select input based on the primary's value
  let SecondarySelect
  switch(category) {
    case 'title':
      SecondarySelect = (
        <select name="title" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="steelersTonight">Steelers Tonight!</option>
            <option value="theDawgPound">The Dawg Pound</option>
            <option value="theExpanse">The Expanse</option>
            <option value="starTrekDiscovery">Star Trek Discovery</option>
            <option value="twilightZone">Twilight Zone</option>
            <option value="crimePatrol">Crime Patrol</option>
            <option value="forensicFiles">Forensic Files</option>
        </select>
      )
      break;
    case 'genre':
      SecondarySelect = (
        <select name="genre" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="sports">Sports</option>
            <option value="scienceFiction">Science Fiction</option>
            <option value="mystery">Mystery</option>
        </select>
      )
      break;
    case 'network':
      SecondarySelect = (
        <select name="network" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="cbs">CBS</option>
            <option value="abc">ABC</option>
            <option value="syfy">SyFy</option>
        </select>
      )
      break;
    case 'hometown':
      SecondarySelect = (
        <select name="hometown" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="pittsburgh">Pittsburgh</option>
            <option value="newYork">New York</option>
            <option value="boston">Boston</option>
            <option value="cleveland">Cleveland</option>
        </select>
      )
      break;
    default:
      SecondarySelect = (<span>Placeholder</span>)
  }

  return (
    <div className="comparative-container">
      <h1 className="comparative-title">Comparative</h1>
      <div className="comp-select-heading">
        <h2>Subdivide</h2>
        <select name="concerns" onChange={(e)=> { setCategory(e.target.value); setCategoryKey(initSubs[e.target.value])}} value={category}>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="network">Network</option>
          <option value="hometown">Viewer Hometown</option>
        </select>
        <h2> / </h2>
        {SecondarySelect}
        <h2>by...</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <CircleChart
          parentCategory={category}
          categoryKey={categoryKey}
          // Line below is used to determine which three remaining columns
          // should be compared against the primary column the user selected
          chartCategory={subOptions.filter(opt => opt !== category)[0]}
        />
        <CircleChart
          parentCategory={category}
          categoryKey={categoryKey}
          chartCategory={subOptions.filter(opt => opt !== category)[1]}
        />
        <CircleChart
          parentCategory={category}
          categoryKey={categoryKey}
          chartCategory={subOptions.filter(opt => opt !== category)[2]}
        />
      </div>
    </div>
  )
}

export default Comparative
