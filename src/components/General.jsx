import Input from './Input'
import React from 'react'

export default function General() {
  const id = React.useId()

  return (
    <section>
      <h2>General Information</h2>
      <Input
        type="text"
        id={id + 'name'}
        name="name"
        placeholder="Peter Parker"
        label="Name"
      />
      <Input
        type="email"
        id={id + 'email'}
        name="email"
        placeholder="example@gmail.com"
        label="Email"
      />
      <Input
        type="tel"
        id={id + 'tel'}
        name="tel"
        placeholder="00000 00000000"
        label="Tel"
      />
    </section>
  )
}
