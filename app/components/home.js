import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter, Link }from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { BrowserRouter as Router } from "react-router-dom";
import { App } from './App';
import { AddTask } from './addTask';
import { SignIn } from './sigin';



export  class Home extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Code Center Todo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addTask"> <Link to='/addTask'>Add Task </Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout"> <Link to='/logout'>Log Out </Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
                <Route  exact path='/home' component={App} />
                <Route path='/addTask' component={AddTask} />
                <Route path='/logout' component={SignIn} />
      </div>
    );
  }
}