import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Spinner } from 'reactstrap';

export class SignUpView extends React.Component{
    render(){
        const spinner =  <Spinner size="md"   />

        return(
            <Router>
                 <Container >
                <Row style={{alignItems: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: 50, marginTop:50}} >
                    <Col  sm="3"></Col>
                    <Col  sm="6">
                    <h4>Code Center Todo</h4>
                    <Form>
                        <FormGroup>
                        <p style={{color: 'red'}}>{this.props.errMessage}</p>
                        <Input  placeholder='First Name' 
                                type='text' name='firstName' 
                                value={this.props.firstName} 
                                onChange={this.props.handleFirstName} 
                        /> 
                        </FormGroup>
                        <FormGroup>
                    <Input  placeholder='Last Name' 
                            type='text' name='lastName' 
                            value={this.props.lastName} 
                            onChange={this.props.handleLastName} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Username'
                            type='text' name='userName' 
                            value={this.props.userName} 
                            onChange={this.props.handleUsername}
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Password' 
                            type='password'  
                            value={this.props.password}  
                            onChange={this.props.handlePassword}
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Bio...' 
                            type='text' name='bio' 
                            value={this.props.bio} 
                            onChange={this.props.handleBio} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Email' 
                            type='text' 
                            value={this.props.email} 
                            onChange={this.props.handleEmail} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Gender' 
                            type='text' 
                            value={this.props.gender} 
                            onChange={this.props.handleGender} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Phone Number' 
                            type='number'
                            value={this.props.phoneNumber} 
                            onChange={this.props.handlePhoneNumber} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='Address' 
                            type='text'  
                            value={this.props.address} 
                            onChange={this.props.handleAddress} 
                    /> 
                    </FormGroup>
                    <FormGroup>
                    <Input  placeholder='State' 
                            type='text'
                            value={this.props.stateOfOrigin} 
                            onChange={this.props.handleStateOfOrigin} 
                    />  
                    </FormGroup>
                    <Button color="primary" size="lg" block
                        onClick={this.props.signUp}
                        disabled={this.props.disable} 
                    >
                        Sign Up
                        {this.props.spinner ? spinner : null}
                    </Button> 
                </Form>
                </Col>
                <Col  sm="3"></Col>
                </Row>
                </Container>
            </Router>
        )
    }
}


SignUpView.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    stateOfOrigin: PropTypes.string.isRequired,
    handleFirstName: PropTypes.func.isRequired,
    handleLastName: PropTypes.func.isRequired,
    handleUsername: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handleBio: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handleGender: PropTypes.func.isRequired,
    handlePhoneNumber: PropTypes.func.isRequired,
    handleAddress: PropTypes.func.isRequired,
    handleStateOfOrigin: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    errMessage: PropTypes.string,
    disable: PropTypes.bool.isRequired,
    spinner: PropTypes.bool.isRequired
}
