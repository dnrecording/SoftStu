import React, { Component } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// import { Layout } from './components/Layout';
import Profile from "./Profile";
import OtherProfile from "./OtherProfile";
import Landing_page from "./Landing_page";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing_page />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route path="/profile/:id" element={<OtherProfile />}></Route>
        </Routes>
      </Router>
    );
  }
}
