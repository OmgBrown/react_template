import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Card, Input } from 'semantic-ui-react'


let pageStyle = {
  background: '#eee'
};


class Lookup extends Component {

  handleClick = () => console.log("clicked");
  handleSubmit = () => console.log();

  render() {
    return (
        <div className="ui grid container" style={pageStyle}>
          <div className="computer only row">
            <div className="column">
              <h1>Lookup Customer</h1>
              <Input fluid action={{icon:'search', content:'Search'}}  placeholder='Search...' />
            </div>
          </div>
        </div>
    )
  }
}


// function mapStateToProps(state) {
//   return {
//     users: state.users,
//   }
// }
//
// function matchDispatchtoProps(dispatch) {
//   return bindActionCreators({
//     logStuff: logStuff
//   }, dispatch);
// }

//export default connect(mapStateToProps, matchDispatchtoProps)(MainPage);
export default Lookup;