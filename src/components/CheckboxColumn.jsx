import React from 'react'
import { namingDictionary } from '../helpers.js'

// This component dries up code considerable,
// means all the checkbox inputs do not have
// to be hard coded
const CheckboxColumn = ({ columnName, handleCheckboxChange, inputName, stateName }) => {
  return (
    <div className="checkbox-wrapper">
      <input
          checked={stateName.includes(inputName)}
          data-column={columnName}
          id={inputName}
          name={inputName}
          onChange={handleCheckboxChange}
          type="checkbox"
          value={inputName}
      />
      <label htmlFor={inputName}>{namingDictionary[inputName]}</label>
    </div>
  )
}

export default CheckboxColumn
