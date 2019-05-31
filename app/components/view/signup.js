import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from "react-router-dom";

export class SignUpView extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <p style={{color: 'red'}}>{this.props.errMessage}</p>
                    <input placeholder='First Name' 
                            type='text' name='firstName' 
                            value={this.props.firstName} 
                            onChange={this.props.handleFirstName} 
                    /> <br />
                    <input placeholder='Last Name' 
                            type='text' name='lastName' 
                            value={this.props.lastName} 
                            onChange={this.props.handleLastName} 
                    /> <br />
                    <input placeholder='Username'
                            type='text' name='userName' 
                            value={this.props.userName} 
                            onChange={this.props.handleUsername}
                    /> <br />
                    <input placeholder='Password' 
                            type='password'  
                            value={this.props.password}  
                            onChange={this.props.handlePassword}
                    /> <br />
                    <input placeholder='Bio...' 
                            type='text' name='bio' 
                            value={this.props.bio} 
                            onChange={this.props.handleBio} 
                    /> <br />
                    <input placeholder='Email' 
                            type='text' 
                            value={this.props.email} 
                            onChange={this.props.handleEmail} 
                    /> <br />
                    <input placeholder='Gender' 
                            type='text' 
                            value={this.props.gender} 
                            onChange={this.props.handleGender} 
                    /> <br />
                    <input placeholder='Phone Number' 
                            type='number'
                            value={this.props.phoneNumber} 
                            onChange={this.props.handlePhoneNumber} 
                    /> <br />
                    <input placeholder='Address' 
                            type='text'  
                            value={this.props.address} 
                            onChange={this.props.handleAddress} 
                    /> <br />
                    <input placeholder='State' 
                            type='text'
                            value={this.props.stateOfOrigin} 
                            onChange={this.props.handleStateOfOrigin} 
                    />  <br />
                    <button 
                        onClick={this.props.signUp}
                        disabled={this.props.disable} 
                    >Sign Up</button> <br />
                </div>
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
    disable: PropTypes.bool.isRequired

}
