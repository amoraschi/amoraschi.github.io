import React from 'react'
import HeaderBox from './HeaderBox'

export default class Header extends React.Component {
  render () {
    return (
      <header
        className='header'
      >
        <div
          className='header-title'
        >
          <h1>
            祥
          </h1>
        </div>
        <HeaderBox
          text='GITHUB'
          link='https://github.com/amoraschi'
        />
        <HeaderBox
          text='CONTACT'
          position={window.innerHeight * 1.5}
        />
        <HeaderBox
          text='ABOUT'
          position={window.innerHeight * 0.5}
        />
        <HeaderBox
          text='HOME'
          position='0'
        />
      </header>
    )
  }
}
