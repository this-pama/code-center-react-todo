import React from 'react'
import {AddTaskView } from './view/addTask'

export class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            taskName: '',
            desc: '',
            time: '',
            reminderTime: '', 
            isCompleted: false,
            disable:true,
            errMessage: '',
            spin: false

        }
        
    }

    handleTaskName= (name)=> {
        if(name.target.value.length > 0 ){
            this.setState({
                taskName: name.target.value 
            }, this.validateForm)
        }
        else{
            this.setState({
                taskName: name.target.value 
            })
        }
    }

   handleDesc= (name)=> {
        if(name.target.value.length > 0 ){
            this.setState({
                desc: name.target.value 
            }, this.validateForm)
        }
        else{
            this.setState({
                desc: name.target.value 
            })
        }
    }

    handleIsCompleted= (name)=> {
        if(name.target.checked){
            this.setState({
                isCompleted: name.target.checked
            }, this.validateForm)
        }
        else{
            this.setState({
                isCompleted: false
            })
        }
    }

    handleReminderTime= (name)=> {
        if(name.target.value){
            this.setState({
                reminderTime: name.target.value 
            }, this.validateForm)
        }
        else{
            this.setState({
                reminderTime: name.target.value 
            })
        }
    }

    handleTime= (name)=> {
        if(name.target.value){
            this.setState({
                time: name.target.value 
            }, this.validateForm)
        }
        else{
            this.setState({
                time: name.target.value 
            })
        }
    }



    validateForm = () =>{
        if(this.state.taskName.length > 0 && this.state.desc.length > 0 && 
            this.state.time.length > 0 && this.state.reminderTime.length > 0)
            {
                this.setState({disable : false})
            }
        else{
            this.setState({disable: true})
        }
    }

    addTask =  async () => {
        this.setState({ spin : true})
        console.log('add task')
        var url = "https://code-center-express-app.herokuapp.com/task"
       var addTaskFetch = await fetch(url,{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                taskName: this.state.taskName,
                description:this.state.desc,
                time: this.state.time,
                reminderTime: this.state.reminderTime,
                isCompleted: this.state.isCompleted      
            }),
        })
        var response = await addTaskFetch
        var res = await response.json()
        console.log(res)
        if(res.err){
            
            this.setState({
                errMessage:"There seems to be an error",
                spin: false
            })
        }
        else if (res.taskName){
            this.setState({
                taskName: '',
                desc: '',
                time: '',
                reminderTime: '', 
                isCompleted: false,
                disable:true,
                errMessage: 'Task Successfully Added',
                spin: false
            })
        }
        else{
            this.setState({
                errMessage: "Network Error",
                spin: false
            })
        }
    
    }

    render(){
            return(
                <AddTaskView 
                    taskName={this.state.taskName}
                    desc={this.state.desc}
                    time={ this.state.time}
                    isCompleted= {this.state.isCompleted}
                    reminderTime = {this.state.reminderTime}
                    handleTaskName= {this.handleTaskName}
                    handleDesc = {this.handleDesc}
                    handleTime= {this.handleTime}
                    handleIsCompleted = {this.handleIsCompleted}
                    handleReminderTime = {this.handleReminderTime}
                    addTask = {this.addTask}
                    disable= {this.state.disable}
                    errMessage= {this.state.errMessage}
                    spinner= {this.state.spin}
                />
             )

    }
}