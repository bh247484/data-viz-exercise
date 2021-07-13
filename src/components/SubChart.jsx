import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { namingDictionary } from '../helpers.js'
const jsonData = require('../data.json')

const SubChart = ({ parentCategory, categoryKey, chartCategory }) => {
  let chartData = {}
  const filteredArray = jsonData.filter(row => row[parentCategory] === categoryKey)
  filteredArray.forEach((row) => {
    if(chartData[row[chartCategory]]) {
      chartData[row[chartCategory]] += row.numViewers
    } else {
      chartData[row[chartCategory]] = row.numViewers
    }
  })

  
  const formattedLabels = Object.keys(chartData).map((label) => {
    return namingDictionary[label]
  })

  const data = {
    labels: formattedLabels,
    datasets: [{
      label: 'Test',
      data: Object.values(chartData),
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
      hoverOffset: 4
    }]
  }
  return (
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{ textAlign: 'center' }}>{chartCategory}</h2>
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
                  }
                }
              }
            }}
        />
      </div>
    </div>
  )
}

export default SubChart
