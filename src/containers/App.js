import React, { Component } from 'react'
import AppRoutes from '../routes';
import NavMenu from './NavMenu';

class App extends Component {
  render() {
    return (
      <div className='appWrapper'>
      <NavMenu />
      <AppRoutes />
      </div>
    );
  };
};


export default (App);
