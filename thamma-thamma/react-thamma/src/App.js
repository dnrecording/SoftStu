import React, { Component } from "react";
import { Route, Routes, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./Profile";
import OtherProfile from "./OtherProfile";
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import CreatePostPage from "./CreatePostPage";
import UserTable from "./components/UserTable";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          render={(location) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={3000} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" element={<HomePage />}></Route>
                  <Route exact path="/profile" element={<Profile />}></Route>
                  <Route path="/profile/:id" element={<OtherProfile />}></Route>
                  <Route path="/content" element={<ContentPage />}></Route>
                  <Route path="/login" element={<LoginPage />}></Route>
                  <Route path="/register" element={<RegisterPage />}></Route>
                  <Route
                    path="/createpost"
                    element={<CreatePostPage />}
                  ></Route>
                  <Route path="/manage" element={<UserTable />}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
