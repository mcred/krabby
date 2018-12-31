import React from 'react'
import anglerfish from '../images/angler-bright.png'



export default class App extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          padding: 10,
        }}>
        <img alt="Angler" src={anglerfish} />
      </div>
    )
  }
}
