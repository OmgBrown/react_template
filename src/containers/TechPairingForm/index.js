import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {logStuff} from '../../actions/user';

import { Button, Input } from 'semantic-ui-react'



class TechPairingForm extends Component {

  handleClick = () => console.log("clicked")

  render() {
    return (
      <div>
        <form>
        <Button>Pair</Button>
        <Button type='button'>press me</Button>
        <Input focus placeholder='Search...' />
        </form>

        <Button
          primary
          onClick={this.handleClick}
          content='Click'
        />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({
    logStuff: logStuff
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchtoProps)(TechPairingForm);