import React from 'react'
import PropTypes from 'prop-types'

export class AddTaskView extends React.Component{
    render(){
        return(
            <div>
                <p style={{color: 'blue'}}>{this.props.errMessage}</p>
                <input placeholder='Task Name' type='text' value={this.props.taskName} onChange={this.props.handleTaskName} /> <br />
                <input placeholder='Description' type='text' value={this.props.desc} onChange={this.props.handleDesc} /> <br />
                <input placeholder='Time' type='date' value={this.props.time} onChange={this.props.handleTime} /> <br />
                <input  type='checkbox' value={this.props.isCompleted} onChange={this.props.handleIsCompleted} />Completed ? <br />
                <input placeholder='Reminder Time in minutes' type='number' value={this.props.reminderTime} onChange={this.props.handleReminderTime} /> <br />
                <button onClick={this.props.addTask} disabled={this.props.disable} >Add Task</button> <br />
            </div>
        )
    }
}

AddTaskView.propTypes = {
    taskName: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    reminderTime: PropTypes.string.isRequired,
    handleTaskName: PropTypes.func.isRequired,
    handleDesc: PropTypes.func.isRequired,
    handleTime: PropTypes.func.isRequired,
    handleIsCompleted: PropTypes.func.isRequired,
    handleReminderTime: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    disable: PropTypes.bool.isRequired,
    errMessage: PropTypes.string.isRequired

}