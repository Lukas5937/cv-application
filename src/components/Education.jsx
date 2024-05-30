import Input from './Input'
import React from 'react'

export default function General() {
  const id = React.useId()

  return (
    <section>
      <h2>Educational Experience</h2>
      <Input
        type="text"
        id={id + 'school'}
        name="school"
        placeholder="UC Berkley"
        label="School"
      />
      <Input
        type="text"
        id={id + 'study-title'}
        name="study-title"
        placeholder="Marketing"
        label="Study Title"
      />
      <Input
        type="date"
        id={id + 'study-from'}
        name="study-from"
        label="Study from"
      />
      <Input
        type="date"
        id={id + 'study-end'}
        name="study-end"
        label="Study end"
      />
    </section>
  )
}
