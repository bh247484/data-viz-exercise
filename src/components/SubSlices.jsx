import React, { useState } from 'react'
import SubChart from './SubChart.jsx'

const SubSlices = () => {
  const [category, setCategory] = useState('title')
  const [categoryKey, setCategoryKey] = useState('steelersTonight')
  const subOptions = ['title', 'genre', 'network', 'hometown']
  const initSubs = {
    title: 'steelersTonight',
    genre: 'sports',
    network: 'cbs',
    hometown: 'pittsburgh'
  }

  let SubSelect
  switch(category) {
    case 'title':
      SubSelect = (
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
      SubSelect = (
        <select name="genre" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="sports">Sports</option>
            <option value="scienceFiction">Science Fiction</option>
            <option value="mystery">Mystery</option>
        </select>
      )
      break;
    case 'network':
      SubSelect = (
        <select name="network" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="cbs">CBS</option>
            <option value="abc">ABC</option>
            <option value="syfy">SyFy</option>
        </select>
      )
      break;
    case 'hometown':
      SubSelect = (
        <select name="hometown" onChange={(e)=> setCategoryKey(e.target.value)} value={categoryKey}>
            <option value="pittsburgh">Pittsburgh</option>
            <option value="newYork">New York</option>
            <option value="boston">Boston</option>
            <option value="cleveland">Cleveland</option>
        </select>
      )
      break;
    default:
      SubSelect = (<span>Placeholder</span>)
  }
  return (
    <div>
      <h1>Primary Concern</h1>
      <select name="concerns" onChange={(e)=> { setCategory(e.target.value); setCategoryKey(initSubs[e.target.value])}} value={category}>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="network">Network</option>
          <option value="hometown">Viewer Hometown</option>
      </select>
      {SubSelect}
      <SubChart
        parentCategory={category}
        categoryKey={categoryKey}
        chartCategory={subOptions.filter(opt => opt !== category)[0]}
      />
      <SubChart
        parentCategory={category}
        categoryKey={categoryKey}
        chartCategory={subOptions.filter(opt => opt !== category)[1]}
      />
      <SubChart
        parentCategory={category}
        categoryKey={categoryKey}
        chartCategory={subOptions.filter(opt => opt !== category)[2]}
      />
    </div>
  )
}

export default SubSlices
