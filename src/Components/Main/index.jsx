import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
        <main role="main">
            {this.props.children}
        </main>
    )
  }
}
