import React from 'react'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}
