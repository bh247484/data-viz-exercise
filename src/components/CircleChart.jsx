import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { namingDictionary } from '../helpers.js'
const jsonData = require('../data.json')

const CircleChart = ({ parentCategory, categoryKey, chartCategory }) => {

  // Use user inputs (passed as props) to select for specific comparative data
  // Loop through the JSON data and assign it selectively to the chartData object
  let chartData = {}
  const filteredArray = jsonData.filter(row => row[parentCategory] === categoryKey)
  filteredArray.forEach((row) => {
    if(chartData[row[chartCategory]]) {
      chartData[row[chartCategory]] += row.numViewers
    } else {
      chartData[row[chartCategory]] = row.numViewers
    }
  })

  // Pull out labels from the chartData object
  // These will be passed to the chart
  const formattedLabels = Object.keys(chartData).map((label) => {
    return namingDictionary[label]
  })

  // Prepare data object to be passed to chart Component below on line 43
  const data = {
    labels: formattedLabels,
    datasets: [{
      label: 'Test',
      // Values from chartData as passed into the chart as an Array
      data: Object.values(chartData),
      backgroundColor: ['#410D43', '#155B77', '#A9C4C6', '#C04375', '#323232', '#979797', '#1B1A40'],
      hoverOffset: 4
    }]
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{ marginBottom: '8px', textAlign: 'center' }}>{chartCategory.charAt(0).toUpperCase() + chartCategory.slice(1)}</h2>
      <div style={{ width: '300px' }}>
        <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    boxHeight: 10,
                    boxWidth: 10,
                    font: { family: "'Alata', sans-serif" }
                  }
                }
              }
            }}
        />
      </div>
    </div>
  )
}

export default CircleChart
