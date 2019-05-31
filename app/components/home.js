import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from './App';
import { AddTask } from './addTask';
import { SignIn } from './sigin';

export class Home extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <button><Link to='/home'> Home </Link></button> <br />
                    <button><Link to='/addTask'> Add Task </Link></button> <br />
                    <button><Link to='/'> Log Out </Link></button> <br />
                </div>
                <Route  exact path='/home' component={App} />
                <Route path='/addTask' component={AddTask} />
                <Route path='/logout' component={SignIn} />
            </Router>
        )
    }
}