import React, { useState, useEffect } from 'react'
const jsonData = require('../data.json')

const GlobalFilter = (props) => {
  const {
    titles,
    setTitles,
    genres,
    setGenres,
    networks,
    setNetworks,
    hometowns,
    setHometowns,
  } = props
  const [totalViewers, setTotalViewers] = useState()

  useEffect(() => {
    let newTotal = 0
    console.log('render')
    jsonData.forEach((row) => {
      if(titles.includes(row.title) || genres.includes(row.genre) || networks.includes(row.network) || hometowns.includes(row.hometown)) {
        newTotal += row.numViewers
        console.log(newTotal)
      }
    })
    setTotalViewers(newTotal)
  }, [titles, genres, networks, hometowns])

  const handleCheckboxChange = ({ target }) => {

    if (target.dataset.column === 'titles') {
      if (titles.includes(target.value)) {
        const updatedArray = titles.filter(i => i !== target.value)
        setTitles(updatedArray)  
      } else {
        setTitles([...titles, target.value])
      }
      console.log(titles)
    }

    if (target.dataset.column === 'genres') {
      if (genres.includes(target.value)) {
        const updatedArray = genres.filter(i => i !== target.value)
        setGenres(updatedArray)  
      } else {
        setGenres([...genres, target.value])
      }
      console.log(genres)
    }

    if (target.dataset.column === 'networks') {
      if (networks.includes(target.value)) {
        const updatedArray = networks.filter(i => i !== target.value)
        setNetworks(updatedArray)  
      } else {
        setNetworks([...networks, target.value])
      }
      console.log(networks)
    }

    if (target.dataset.column === 'hometowns') {
      if (hometowns.includes(target.value)) {
        const updatedArray = hometowns.filter(i => i !== target.value)
        setHometowns(updatedArray)  
      } else {
        setHometowns([...hometowns, target.value])
      }
      console.log(hometowns)
    }
    
  }

  return (
    <div>
      <h1>Global Filter</h1>
      <div style={{display: 'flex', marginBottom: '24px', justifyContent: 'space-around'}}>
        {/* Title */}
        <div className="filter-column">
          <h4>Title</h4>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('steelersTonight')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="steelersTonight"
                value="steelersTonight"
            />
            <label htmlFor="steelersTonight">Steelers Tonight!</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('theDawgPound')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="theDawgPound"
                value="theDawgPound"
            />
            <label htmlFor="theDawgPound">The Dawg Pound</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('theExpanse')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="theExpanse"
                value="theExpanse"
            />
            <label htmlFor="theExpanse">The Expanse</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('starTrekDiscovery')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="starTrekDiscovery"
                value="starTrekDiscovery"
            />
            <label htmlFor="starTrekDiscovery">Star Trek Discovery</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('twilightZone')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="twilightZone"
                value="twilightZone"
            />
            <label htmlFor="twilightZone">Twilight Zone</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('crimePatrol')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="crimePatrol"
                value="crimePatrol"
            />
            <label htmlFor="crimePatrol">Crime Patrol</label>
          </div>
          <div>
            <input
                data-column="titles"
                checked={titles.includes('forensicFiles')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="forensicFiles"
                value="forensicFiles"
            />
            <label htmlFor="forensicFiles">Forensic Files</label>
          </div>
        </div>

        {/* Genre */}
        <div className="filter-column">
          <h4>Genre</h4>
          <div>
            <input
                data-column="genres"
                checked={genres.includes('sports')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="sports"
                value="sports"
            />
            <label htmlFor="sports">Sports</label>
          </div>
          <div>
            <input
                data-column="genres"
                checked={genres.includes('scienceFiction')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="scienceFiction"
                value="scienceFiction"
            />
            <label htmlFor="scienceFiction">Science Fiction</label>
          </div>
          <div>
            <input
                data-column="genres"
                checked={genres.includes('mystery')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="mystery"
                value="mystery"
            />
            <label htmlFor="mystery">Mystery</label>
          </div>
        </div>

        {/* NetWork */}
        <div className="filter-column">
          <h4>Network</h4>
          <div>
            <input
                data-column="networks"
                checked={networks.includes('cbs')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="cbs"
                value="cbs"
            />
            <label htmlFor="cbs">CBS</label>
          </div>
          <div>
            <input
                data-column="networks"
                checked={networks.includes('abc')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="abc"
                value="abc"
            />
            <label htmlFor="abc">ABC</label>
          </div>
          <div>
            <input
                data-column="networks"
                checked={networks.includes('syfy')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="syfy"
                value="syfy"
            />
            <label htmlFor="syfy">SyFy</label>
          </div>
        </div>

        {/* Hometown */}
        <div className="filter-column">
          <h4>Viewer Hometown</h4>
          <div>
            <input
                data-column="hometowns"
                checked={hometowns.includes('pittsburgh')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="pittsburgh"
                value="pittsburgh"
            />
            <label htmlFor="pittsburgh">Pittsburgh</label>
          </div>
          <div>
            <input
                data-column="hometowns"
                checked={hometowns.includes('newYork')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="newYork"
                value="newYork"
            />
            <label htmlFor="newYork">New York</label>
          </div>
          <div>
            <input
                data-column="hometowns"
                checked={hometowns.includes('boston')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="boston"
                value="boston"
            />
            <label htmlFor="boston">Boston</label>
          </div>
          <div>
            <input
                data-column="hometowns"
                checked={hometowns.includes('cleveland')}
                onChange={handleCheckboxChange}
                type="checkbox"
                name="cleveland"
                value="cleveland"
            />
            <label htmlFor="cleveland">Cleveland</label>
          </div>
        </div>
      </div>
      <h1>{`Total Viewers: ${totalViewers}`}</h1>
    </div>
  )
}

export default GlobalFilter
