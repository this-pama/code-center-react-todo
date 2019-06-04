import React from 'react'
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SignUp } from '../signup'
import PropTypes from 'prop-types';

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Spinner } from 'reactstrap';

// the class View is just showing the login page. It is not doing anything other than that.
// the view class is not handling how the signin is going to be
 class View extends React.Component{
    render(){
        const spinner =  <Spinner size="md"   />

        
        return(
            <Router>
            <Container >
                <Row style={{alignItems: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: 50, marginTop:50}} >
                    <Col xs="6" sm="4"></Col>
                    <Col xs="6" sm="4">
                    <h4>Code Center Todo</h4>
                    <Form>
                        <FormGroup>
                        <p style={{color: 'red'}}>{this.props.errMessage}</p>
                        <Input 
                                placeholder="Username" 
                                value={this.props.username} 
                                type="text" 
                                onChange= {this.props.handleUsername}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                placeholder="Password" 
                                value={this.props.password} 
                                type="text" 
                                onChange= {this.props.handlePassword}
                            />
                        </FormGroup>
                    
                            <Button color="primary" size="lg" block
                                onClick={()=> this.props.logIn(this.props.username, this.props.password)}
                                disabled={this.props.disable}
                            >
                                Log In
                                {this.props.spinner ? spinner : null}
                                </Button>

                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </Form>
                    </Col>
                    <Col xs="6" sm="4"></Col>
                </Row>
               </Container>
               </Router>
           
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
                                spinner={this.props.spinner}
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