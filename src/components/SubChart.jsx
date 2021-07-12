import React from 'react'
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
  return (
    <div style={{marginBottom: '24px'}}>
      {parentCategory} --- {chartCategory} --- {categoryKey}
      <div>{JSON.stringify(chartData)}</div>
    </div>
  )
}

export default SubChart
