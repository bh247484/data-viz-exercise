import React from 'react'
import { Doughnut } from 'react-chartjs-2'
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
  console.log(Object.values(chartData))

  
  const formattedLabels = Object.keys(chartData).map((label) => {
    return label.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    // if(label.length === 3) {
    //   label.toLocaleUpperCase()
    // }
  })

  const data = {
    labels: formattedLabels.map(label => label.length === 3 ? label.toUpperCase() : label),
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
                  position: 'top',
                  labels: {
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
