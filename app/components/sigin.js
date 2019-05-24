import React from 'react'

export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: '',
            disable: true
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.validateForm = this.validateForm.bind(this)
    }
     async logIn (username, password){
        var url = "https://code-center-express-app.herokuapp.com/login"
       var loginFetch = await fetch(url,{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            }),
        })
    }

    handleUsername(username){
        if(username.target.value.length > 0){
            this.setState({
                username: username.target.value
            }, this.validateForm)
            console.log(username.target.value)
        }
        else{
            this.setState({
                errMessage: "Password cannot be empty"
            })
        }
    }

    handlePassword(password){
        if(password.target.value.length > 0){
            this.setState({
                password: password.target.value
            }, this.validateForm)
            console.log(password.target.value)
        }
        else{
            this.setState({
                errMessage: "Password cannot be empty"
            })
        }
    }

    validateForm() {
        if(this.state.username.length> 0 && this.state.password.length > 0){
            this.setState({
                disable: false
            })
        }
    }


    render(){
        return(
            <form>
                <p>{this.state.errMessage}</p>
                <input placeholder="Username" name='username' type='text' value={this.state.username}  onChange= {this.handleUsername}/> <br />
                <input placeholder='Password' type='password' name='password' value={this.state.password} onChange= {this.handlePassword} /> <br />
                <button onClick= {()=> this.logIn(this.state.username, this.state.password) } disabled={ this.state.disable}>Log In</button>
            </form>
        )
    }
}