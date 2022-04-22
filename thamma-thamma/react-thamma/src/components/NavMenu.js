import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const adminID = "62526df6d30be6196cd5f864";
    const Logout = () => {
      localStorage.removeItem("id");
    };

    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 py-0"
          light
        >
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

            <Collapse
              className="d-sm-inline-flex justify-content-end"
              isOpen={!this.state.collapsed}
              navbar
            >
              <NavbarBrand
                tag={Link}
                to="/"
                className="d-sm-inline-flex justify-content-start"
              >
                THAMMA
              </NavbarBrand>
              <ul className="navbar-nav flex-grow">
                {/* ------------------------------------------------------------------------------------------------------------------------ */}
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/"
                    style={{ mr: "500px" }}
                  >
                    Blog
                  </NavLink>
                </NavItem>
                {/* ------------------------------------------------------------------------------------------------------------------------ */}
                {localStorage.getItem("id") === adminID && (
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="text-dark"
                      to={"/createpost"}
                    >
                      CreatePost
                    </NavLink>
                  </NavItem>
                )}
                {localStorage.getItem("id") === adminID && (
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to={"/manage"}>
                      Manage User
                    </NavLink>
                  </NavItem>
                )}
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/profile">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/login"
                    onClick={Logout}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
