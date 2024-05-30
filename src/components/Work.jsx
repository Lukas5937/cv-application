import Input from './Input'
import React from 'react'

export default function Work() {
  const id = React.useId()

  return (
    <section>
      <h2>Work Experience</h2>
      <Input
        type="text"
        id={id + 'company-name'}
        name="company-name"
        placeholder="Meta"
        label="Company Name"
      />
      <Input
        type="text"
        id={id + 'position-title'}
        name="position-title"
        placeholder="Manager"
        label="Position Title"
      />
      <Input
        type="date"
        id={id + 'start-from'}
        name="start-from"
        label="Start from"
      />
      <Input type="date" id={id + 'until'} name="until" label="Until" />
      <Input
        type="text"
        id={id + 'main-responsibilities'}
        name="main-responsibilities"
        placeholder="Serving coffee"
        label="Main Responsibilities"
      />
    </section>
  )
}
