import React from 'react'
import { namingDictionary } from '../helpers.js'

const CheckboxColumn = ({ columnName, handleCheckboxChange, inputName, stateName }) => {
  return (
    <div>
      <input
          data-column={columnName}
          checked={stateName.includes(inputName)}
          onChange={handleCheckboxChange}
          type="checkbox"
          name={inputName}
          value={inputName}
      />
      <label htmlFor={inputName}>{namingDictionary[inputName]}</label>
    </div>
  )
}

export default CheckboxColumn
