import React from 'react'
import { FormContext } from '../App'

export default function Input({ type, id, name, placeholder, label }) {
  const value = React.useContext(FormContext)

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      {value.submitted ? (
        <div>{value.formData[name]}</div>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={value.handleChange}
          value={value.formData[name] || ''}
        />
      )}
    </div>
  )
}
