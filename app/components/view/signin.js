import React from 'react'
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SignUp } from '../signup'

 class View extends React.Component{
    render(){
        return(
                <div>
                    <p style={{color: 'red'}} >{this.props.errMessage}</p>
                    <input placeholder="Username" name='username' type='text' value={this.props.username}  onChange= {this.props.handleUsername}/> <br />
                    <input placeholder='Password' type='password' name='password' value={this.props.password} onChange= {this.props.handlePassword} /> <br />
                    <button onClick= {()=> this.props.logIn(this.props.username, this.props.password) } disabled={ this.props.disable}>Log In</button> <br />
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
           
        )
    }
}

export class SiginView extends React.Component{
        render(){
            return(
                <Router>
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path="/" render ={() => 
                            <View 
                                password={this.props.password}
                                username={this.props.username}
                                handlePassword={this.props.handlePassword}
                                handleUsername={this.props.handleUsername}
                                disable={this.props.disable}
                                errMessage= {this.props.errMessage}
                                logIn={this.props.logIn}
                            /> 
                        }/>
                        />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </section>
                </Router>
            )
        }
}

