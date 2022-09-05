import React from 'react'

export default function About () {
  // Never though I would have to do this
  function decideEducationLevel () {
    const date = new Date()
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1

    if (year >= 2023 && month >= 9) {
      return 'college'
    } else {
      return 'high school'
    }
  }

  function getDuration () {
    return new Date().getUTCFullYear() - 2020
  }

  return (
    <div
      className='About'
    >
      <div
        className='About-Image'
      >
      <img
        alt='profile'
        src='https://avatars.githubusercontent.com/u/68395930?v=4'
      />
      </div>
      <h1>Hi, I'm amoraschi. 👋</h1>
      <p>
        I'm a {decideEducationLevel()} student that has been programming for {getDuration()} years now,
        <br />
        I first started with NodeJS, then learnt HTML, CSS and Typescript
      </p>
      <p>
        I'm currently learning React
      </p>
    </div>
  )
}
