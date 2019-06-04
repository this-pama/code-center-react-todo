import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import  ReactDOM from 'react-dom'
import {App} from "./components/App"
import {SignIn} from "./components/sigin"
import {SignUp} from "./components/signup"
import {AddTask} from "./components/addTask"
import { EditTask } from './components/editTask';


ReactDOM.render(<App />, document.getElementById('app'));