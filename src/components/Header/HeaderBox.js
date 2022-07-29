import React from 'react'

export default class HeaderBox extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.props = props
  // }

  render () {
    return (
      <div
        className='header-box'
      >
        <div>
          {this.getText()}
        </div>
      </div>
    )
  }

  getText () {
    return this.props.link != null ?
    <a
      href={this.props.link}
    >
      <h3
        style={{
          border: '2px solid white',
          padding: '10px',
          margin: '0px'
        }}
      >
        {this.props.text}
      </h3>
    </a> : <h3>{this.props.text}</h3>
  }
}
  