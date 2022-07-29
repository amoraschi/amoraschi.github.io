import React from 'react'
import logo from '../../media/logo.png'
import logo2 from '../../media/logo2.png'

export default class Contact extends React.Component {
  render () {
    return (
      <div
        className='contact'
        style={{
          top: window.innerHeight * 2
        }}
      >
        <h1>
          Contact
        </h1>
        <h3>
          I'm on these platforms
        </h3>
        <div
          className='contact-platforms'
        >
          <h3>
            Github
            <span
              className='br-tag'
            />
            <img src={logo} />
          </h3>
          <h3>
            Discord
            <span
              className='br-tag'
            />
            <img src={logo2} />
          </h3>
        </div>
      </div>
    )
  }
}
