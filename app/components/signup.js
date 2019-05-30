import React from 'react'
import {SignUpView } from './view/signup'
import { App } from './App';


export class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName: '',
            lastName:'',
            userName: '',
            password: '',
            bio: '',
            email: '',
            gender: '',
            phoneNumber: '' ,
            address: '',
            stateOfOrigin: '',

        }
        
    }

    handleFirstName= (firstName)=> {
        if(firstName.target.value.length > 0){
            this.setState({
                firstName: firstName.target.value 
            })
        }
    }

    handleLastName= (name) =>{
        if(name.target.value.length > 0){
            this.setState({
                lastName: name.target.value 
            })
        }
    }

    handleUsername =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                userName: name.target.value 
            })
        }
    }

    handlePassword =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                password: name.target.value 
            })
        }
    }

    handleBio =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                bio: name.target.value 
            })
        }
    }

    handleEmail = (name) =>{
        if(name.target.value.length > 0){
            this.setState({
                email: name.target.value 
            })
        }
    }

    handleGender =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                gender: name.target.value 
            })
        }
    }

    handleAddress =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                address: name.target.value 
            })
        }
    }

    handlePhoneNumber = (name ) => {
        if(name.target.value.length > 0){
            this.setState({
                phoneNumber: name.target.value 
            })
        }
    }

    handleStateOfOrigin  =(name) =>{
        if(name.target.value.length > 0){
            this.setState({
                stateOfOrigin: name.target.value 
            })
        }
    }

    signUp =  async () => {
        var url = "https://code-center-express-app.herokuapp.com/signup"
       var signUpFetch = await fetch(url,{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName:this.state.lastName,
                userName: this.state.userName,
                password: this.state.password,
                bio: this.state.bio,
                email: this.state.email,
                gender: this.state.gender,
                phoneNumber: this.state.phoneNumber,
                address: this.state.address,
                stateOfOrigin: this.state.stateOfOrigin,
                
            }),
        })
        var response = await signUpFetch
        var res = await response.json()
        console.log(res)
        if(res.err){
            this.props.errMessage = "There seems to be an error"
        }
        else if (res.userName){
            return <App />
        }
        else{
            this.props.errMessage = "Network Error"
        }
    
    }

    render(){
        return(
           <SignUpView 
            firstName= { this.state.firstName}
            lastName = {this.state.lastName}
            userName= {this.state.userName}
            password= {this.state.password}
            bio={this.state.password}
            email= {this.state.email}
            gender = {this.state.gender}
            phoneNumber ={this.state.phoneNumber}
            address= {this.state.address}
            stateOfOrigin= {this.state.stateOfOrigin}
            handleFirstName= {this.handleFirstName}
            handleLastName ={this.handleLastName}
            handleUsername= {this.handleUsername}
            handlePassword= {this.handlePassword}
            handleBio= {this.handleBio}
            handleEmail= {this.handleEmail}
            handleGender= {this.handleGender}
            handlePhoneNumber= {this.handlePhoneNumber}
            handleAddress= {this.handleAddress}
            handleStateOfOrigin= {this.handleStateOfOrigin}
            signUp= {this.signUp}
           />
        )
    }
}