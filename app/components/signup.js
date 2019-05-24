import React from 'react'

export class SignUp extends React.Component{
    render(){
        return(
            <form>
                <input placeholder='First Name' type='text' name='firstName' /> <br />
                <input placeholder='Last Name' type='text' name='lastName' /> <br />
                <input placeholder='Username' type='text' name='userName' /> <br />
                <input placeholder='Password' type='password' name='password' /> <br />
                <input placeholder='Bio...' type='text' name='bio' /> <br />
                <input placeholder='Email' type='text' name='email' /> <br />
                <input placeholder='Gender' type='text' name='gender' /> <br />
                <input placeholder='Phone Number' type='text' name='phoneNumber' /> <br />
                <input placeholder='Address' type='text' name='address' /> <br />
                <input placeholder='State' type='text' name='state' />  <br />
                <button >Sign Up</button> <br />
            </form>
        )
    }
}