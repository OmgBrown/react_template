import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { Menu, Icon, Container, Dropdown, Divider, Segment } from 'semantic-ui-react'
import { pageChange } from '../../actions/navigation';

// The Header creates links that can be used to navigate
// between routes.




class NavMenu extends Component {
  menuItems = [
    {activePage: 'home', name:'main', content:'Main', to: '/'},
    {}
  ];

  render() {
    return (
      <Menu pointing secondary size='large'>
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'home'}
            onClick = {() => this.props.pageChange('home')}
            name='main'
            content='Main'
            to='/'
          />
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'comparer'}
            onClick = {() => this.props.pageChange('comparer')}
            name='comparer'
            content='Comparer'
            to='/comparer'
          />
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'lookup'}
            onClick = {() => this.props.pageChange('lookup')}
            name='lookup'
            content='Lookup'
            to='/lookup'
          />
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'pairing'}
            onClick = {() => this.props.pageChange('pairing')}
            name='pairing'
            content='Pairing'
            to='/pairing'
          />
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'about'}
            onClick = {() => this.props.pageChange('about')}
            name='about'
            content='About'
            to='/about'
          />
          <Menu.Item
            as={Link}
            active = {this.props.activePage === 'test'}
            onClick = {() => this.props.pageChange('test')}
            name='test'
            content='Test'
            to='/test'
          />
        <Menu.Menu position='right'>
          <Dropdown item
            icon='id badge'
            text='User Name'
            >
            <Dropdown.Menu>
              <Dropdown.Header>User Options</Dropdown.Header>
              <Dropdown.Item>User Details</Dropdown.Item>
              <Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>
        </Menu>
    )
  }
}


function mapStateToProps(state) {
  return {
    activePage: state.activePage,
  }
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({
    pageChange: pageChange
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchtoProps)(NavMenu);