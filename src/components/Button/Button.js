import React, { Component } from 'react';


class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type='button' onClick={this.props.click}>{this.props.btnText}</button>
    )
  }
}

export default Button;