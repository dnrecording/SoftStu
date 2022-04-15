import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import Profile from './Profile';
import OtherProfile from './OtherProfile';
import Landing_page from './Landing_page';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <Layout>
        <Route exact path="/"> <Landing_page /> </Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route path="/profile/:id"><OtherProfile /></Route>
      </Layout>
    );
  }
}
