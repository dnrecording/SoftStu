import React, { Component, useState, useEffect } from "react";
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
import { useNavigate } from "react-router";
import axios from "axios";

export default function NavMenu() {

  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true,
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }

    const navigate = useNavigate();

    const adminID = "62526df6d30be6196cd5f864";
    let currentuser = localStorage.getItem("id");
    
    const url = `https://localhost:7290/api/user/${currentuser}`;

    const [currentuserdata, setCurrentUserData] = useState({});


    const Logout = () => {
      localStorage.removeItem("id");
    };

    useEffect(() => {
      (async () => {
          if (currentuser === null) {
              navigate("/login");
          } else {
              const myUser = await axios.get(url);
              setCurrentUserData(Object.values(myUser.data));
          }
      })();
  }, []);

    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 py-0 fixed-top"
          light
        >
          <Container style={{display: "flex",justifyContent: "space-between", padding: "20px 0px 10px 0px"}}>
              <NavbarBrand
                tag={Link}
                to="/"
                className="d-sm-inline-flex justify-content-start"
                style={{marginTop:"-4px"}}
              >
                <img src="https://sv1.picz.in.th/images/2022/04/24/8Jfd4Q.png" style={{width:"50px", margin:"0px 10px 0px -20px"}}></img>
                <span style={{fontSize:"30px", fontWeight:"500"}}>THAMMA</span>
              </NavbarBrand>
              <ul className="navbar-nav flex-grow">
                {localStorage.getItem("id") === adminID && (
                  <NavItem style={{marginTop:"7px"}}>
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
                  <NavItem style={{marginTop:"7px"}}>
                    <NavLink tag={Link} className="text-dark" to={"/manage"}>
                      Manage User
                    </NavLink>
                  </NavItem>
                )}
                <NavItem style={{marginTop:"7px"}}>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/login"
                    onClick={Logout}
                  >
                    <span style={{color:"#D6001A", fontWeight:"500"}}>Logout</span>
                  </NavLink>
                </NavItem>
                <NavItem  style={{marginTop:"-7px"}}>
                  <NavLink tag={Link} className="text-dark" to="/profile">
                    <div>
                      {currentuserdata && currentuserdata.length ? 
                        <img src={currentuserdata[6]} className="avatar" style={{margin: "0px 0px 0px 10px"}}></img>
                      : ""}
                    </div>
                  </NavLink>
                </NavItem>
              </ul>
          </Container>
        </Navbar>
        
      </header>
      
    );
    
  }