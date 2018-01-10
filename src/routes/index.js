import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../containers/MainPage';
import MainWithComparer from '../containers/MainWithComparer';
import Home from '../containers/Home';
import About from '../containers/About';
import TechPairingView from '../containers/TechPairingView';
import Lookup from '../containers/Lookup';
import Test from '../containers/Test';


export default () => {
  return (
    <main className='mainWrapper'>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/comparer' component={MainWithComparer} />
        <Route path='/about' component={About}/>
        <Route path='/pairing' component={TechPairingView}/>
        <Route path='/lookup' component={Lookup}/>
        <Route path='/user' component={MainPage}/>
        <Route path='/test' component={Test} />
      </Switch>
    </main>
  );
}
