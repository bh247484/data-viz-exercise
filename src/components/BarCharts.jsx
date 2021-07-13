import React from 'react'
import { Bar } from 'react-chartjs-2'
import { namingDictionary } from '../helpers.js'
const jsonData = require('../data.json')

const BarCharts = ({ titles, genres, networks, hometowns }) => {

  const reduceData = (dataObj, column, targetKey) => {
    const filteredArray = jsonData.filter(row => row[column] === targetKey)
    filteredArray.forEach((row) => {
      if(dataObj[targetKey]) {
        dataObj[targetKey] += row.numViewers
      } else {
        dataObj[targetKey] = row.numViewers
      }
    })
  }

  const titlesData = {}
  const genresData = {}
  const networksData = {}
  const hometownsData = {}

  titles.forEach((entry) => reduceData(titlesData, 'title', entry))
  genres.forEach((entry) => reduceData(genresData, 'genre', entry))
  networks.forEach((entry) => reduceData(networksData, 'network', entry))
  hometowns.forEach((entry) => reduceData(hometownsData, 'hometown', entry))

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  const titlesSet = Object.entries(titlesData).map((entry, index) => {
    return {
      stack: 'titleStack',
      label: namingDictionary[entry[0]],
      data: [entry[1]],
      backgroundColor: colors[index]
    }
  })
  const titlesTotal = Object.values(titlesData).reduce((a,b) => a + b, 0)

  const genresSet = Object.entries(genresData).map((entry, index) => {
    return {
      stack: 'genreStack',
      label: namingDictionary[entry[0]],
      data: [entry[1]],
      backgroundColor: colors[index]
    }
  })
  const genresTotal = Object.values(genresData).reduce((a,b) => a + b, 0)

  const networksSet = Object.entries(networksData).map((entry, index) => {
    return {
      stack: 'networkStack',
      label: namingDictionary[entry[0]],
      data: [entry[1]],
      backgroundColor: colors[index]
    }
  })
  const networksTotal = Object.values(networksData).reduce((a,b) => a + b, 0)

  const hometownsSet = Object.entries(hometownsData).map((entry, index) => {
    return {
      stack: 'hometownStack',
      label: namingDictionary[entry[0]],
      data: [entry[1]],
      backgroundColor: colors[index]
    }
  })
  const hometownsTotal = Object.values(hometownsData).reduce((a,b) => a + b, 0)

  const barChartOptions = {
    animation: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxHeight: 10,
          boxWidth: 10,
        }
      }
    },
    scales: {
      y: {
        stacked: true,
        max: 13792,
      }
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="bar-chart-container" style={{ width: '250px', height: '450px' }}>
        <Bar
            data={{
              labels: ['Title'],
              datasets: titlesSet,
            }}
            options={barChartOptions}
        />
        <h3>{titlesTotal} Viewers</h3>
      </div>
      <div className="bar-chart-container" style={{ width: '225px', height: '450px' }}>
        <Bar
            data={{
              labels: ['Genre'],
              datasets: genresSet,
            }}
            options={barChartOptions}
        />
        <h3>{genresTotal} Viewers</h3>
      </div>
      <div className="bar-chart-container" style={{ width: '225px', height: '450px' }}>
        <Bar
            data={{
              labels: ['Network'],
              datasets: networksSet,
            }}
            options={barChartOptions}
        />
        <h3>{networksTotal} Viewers</h3>
      </div>
      <div className="bar-chart-container" style={{ width: '225px', height: '450px' }}>
        <Bar
            data={{
              labels: [`Viewer's Hometown`],
              datasets: hometownsSet,
            }}
            options={barChartOptions}
        />
        <h3>{hometownsTotal} Viewers</h3>
      </div>
    </div>
  )
}

export default BarCharts
