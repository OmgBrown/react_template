import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/user';
import UserDetail from './UserDetail';

class Home extends Component {
  render() {
    return (
      <div className='homeWrapper'>
        <h1
          onClick={() => this.props.selectUser(this.props.users[0])}
          >
          Welcome {this.props.users[0].firstName}!
        </h1>
        <UserDetail />
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({
    selectUser: selectUser
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchtoProps)(Home);