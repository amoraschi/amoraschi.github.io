import React from 'react'

export default class About extends React.Component {
  render () {
    return (
      <div
        className='about'
        style={{
          top: window.innerHeight
        }}
      >
        <em>
          The ideogram you see on the top left is actually my middle name
        </em>
        <h1
          className='about-title'
        >
          ABOUT
        </h1>
        <h2>
          Welcome!
        </h2>
        <h3>
          Hi, I'm Angelo, a {this.decideEducationLevel()} student currently residing in Spain,
          I made this page to show others some of my interesting projects, and some information about myself.
          <span
            className='br-tag'
          />
          My hobbies/interests include:
          <ul>
            <li>
              Coding
            </li>
            <li>
              Going out with people
            </li>
            <li>
              Cycling
            </li>
            <li>
              Studying new things
            </li>
          </ul>
          <span
            className='br-tag'
          />
          As you can see, I have recently picked up an interest for space-related things,
          even reached a point where I bombard some people with facts about the topic.
        </h3>
      </div>
    )
  }

  // Never though I would have to do this
  decideEducationLevel () {
    const date = new Date()
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1

    if (year >= 2023 && month >= 9) {
      return 'college'
    } else {
      return 'high-school'
    }
  }
}
