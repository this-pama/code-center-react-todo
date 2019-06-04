import React from 'react'
import PropTypes from 'prop-types'
import { Home } from '../home';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Spinner } from 'reactstrap';

export class EditTaskView extends React.Component{
    render(){
        const spinner =  <Spinner size="md"   />
        return(
            <Container >
                <Row style={{alignItems: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: 50, marginTop:50}} >
                    <Col  sm="3"></Col>
                    <Col  sm="6">
                        <h4>Edit Todo Task</h4>
                        <Form>
                            <FormGroup>
                                <p style={{color: 'blue'}}>{this.props.errMessage}</p>
                                <Input placeholder='Task Name' type='text' value={this.props.taskName} onChange={this.props.handleTaskName} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder='Description' type='text' value={this.props.desc} onChange={this.props.handleDesc} /> 
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder='Time' type='date' value={this.props.time} onChange={this.props.handleTime} /> 
                            </FormGroup>
                            <FormGroup style={{alignItems: 'left', justifyContent: 'left', alignContent: 'left', textAlign: 'left', paddingLeft: 30}} >
                                <Input  type='checkbox' value={this.props.isCompleted} onChange={this.props.handleIsCompleted} />Completed ? 
                            </FormGroup> 
                            <FormGroup>
                                <Input placeholder='Reminder Time in minutes' type='number' value={this.props.reminderTime} onChange={this.props.handleReminderTime} /> 
                            </FormGroup> 
                                <Button color="primary" size="lg" block
                                 onClick={this.props.addTask} disabled={this.props.disable} > {this.props.spinner ? spinner : null}Edit Task </Button> 
                        </Form>
                    </Col>
                    <Col  sm="3"></Col>
                </Row>
            </Container>
        )
    }
}

EditTaskView.propTypes = {
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
    errMessage: PropTypes.string.isRequired,
    spinner: PropTypes.bool.isRequired,
}