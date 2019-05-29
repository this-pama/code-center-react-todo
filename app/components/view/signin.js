import React from 'react'
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SignUp } from '../signup'
import PropTypes from 'prop-types';

// the class View is just showing the login page. It is not doing anything other than that.
// the view class is not handling how the signin is going to be
 class View extends React.Component{
    render(){
        return(
               <div>
                   <p>{this.props.errMessage}</p>
                   <input 
                        placeholder="Username" 
                        value={this.props.username} 
                        type="text" 
                        onChange= {this.props.handleUsername}
                    />

                    <input 
                        placeholder="Password" 
                        value={this.props.password} 
                        type="text" 
                        onChange= {this.props.handlePassword}
                    />

                    <button
                        onClick={()=> this.props.logIn(this.props.username, this.props.password)}
                        disabled={this.props.disable}
                    >
                        Log In
                    </button>

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


View.propTypes ={
    password : PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handleUsername: PropTypes.func.isRequired,
    disable: PropTypes.bool.isRequired,
    errMessage: PropTypes.string.isRequired,
    logIn: PropTypes.func.isRequired,
}