import React from 'react'
import './App.css'
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

const FormContext = React.createContext()

export default function App() {
  const [formData, setFormData] = React.useState({})
  const [submitted, setSubmitted] = React.useState(false)

  function handleChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function editForm() {
    setFormData({})
  }

  return (
    <>
      <FormContext.Provider value={{ formData, handleChange, submitted }}>
        <form onSubmit={handleSubmit}>
          <General />
          <Education />
          <Work />
          <button>Sumbit</button>
          <button onClick={editForm} type="button">
            Edit
          </button>
        </form>
      </FormContext.Provider>
    </>
  )
}

export { FormContext }
