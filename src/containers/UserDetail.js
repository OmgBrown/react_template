import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {clearActiveUser} from '../actions/user';

class UserDetail extends Component {
  render() {
    if(!this.props.activeUser){
      return(<h2>no active user selected...</h2>)
    } else {
      return (
        <div className='userDetailWrapper'>
          <h2>
            Details about {this.props.activeUser.firstName}!
          </h2>
          <button onClick={this.props.clearActiveUser}>Clear Active User</button>
        </div>
      )
    }
  };
};

function mapStateToProps(state) {
  return {
    users: state.users,
    activeUser: state.activeUser
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({
    clearActiveUser: clearActiveUser
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchtoProps)(UserDetail);