import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import search from "../Assets/Path 19.png";
import lines from "../Assets/Group 34.png";
import user from "../Assets/Ellipse 1.png";
import "./style.css";

const NavbarMain = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom_nav"
        bg="dar"
        variant="dark"
      >
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto secnd_nav_ul">
            <ul>
              <li>
                <NavLink activeClassName='active_link' className="nav-link" exact to="/">
                  Traffic
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active_link' className="nav-link" exact to="/analytic">
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active_link' className="nav-link" to="/Overview">
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active_link' className="nav-link" to="/Dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <img className="nav_icons" src={search} alt="..." />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img className="nav_icons" src={lines} alt="..." />
            </Nav.Link>
            <Nav.Link href="#deets">
              <img src={user} alt="..." />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
