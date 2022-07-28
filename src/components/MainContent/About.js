import React from 'react'

export default class About extends React.Component {
  render () {
    return (
      <div
        className='about'
        style={{
          top: window.innerHeight,
          height: window.innerHeight / 2
        }}
      >
        <h1
          className='about-title'
        >
          ABOUT
        </h1>
        <h3>
          Welcome,
        </h3>
      </div>
    )
  }
}
