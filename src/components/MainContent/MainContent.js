import React from 'react'
import About from './About'
import Contact from './Contact'

export default class MainContent extends React.Component {
  render () {
    return (
      <main>
        <About />
        <Contact />
      </main>
    )
  }
}
