import React from 'react'

export class SignIn extends React.Component{
    render(){
        return(
            <form>
                <input placeholder='Username' type='text' name='username' /> <br />
                <input placeholder='Password' type='password' name='password' /> <br />
                <button >Log In</button>
            </form>
        )
    }
}