import React from 'react'

export class AddTask extends React.Component{
    render(){
        return(
            <form>
                <input placeholder='Task Name' type='text' name='task' /> <br />
                <input placeholder='Description' type='text' name='description' /> <br />
                <input placeholder='Time' type='date' name='date' /> <br />
                <input  type='checkbox' name='isComplete' />Completed ? <br />
                <input placeholder='Reminder Time in minutes' type='number' name='reminder' /> <br />
                <button >Add Task</button> <br />
            </form>
        )
    }
}