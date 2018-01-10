import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Card, Container, Segment, Input, Form, Button, Checkbox, Header, Divider, Radio } from 'semantic-ui-react'


class Test extends Component {
  numbers = ["item1", "item2", "item3", "item4", "item5"];
  listItems = this.numbers.map((number) =>
    <li key={number.toString()}>
    {number}
    </li>
  );
  render() {
    return (
      <div>
      <h1>test</h1>
      <ul>{this.listItems}</ul>
      </div>
    )
  }
}

export default Test;