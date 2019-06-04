var React = require('react')
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col, ButtonGroup, ButtonToolbar, CardHeader, Container } from 'reactstrap';
import { EditTask } from "./editTask";
import { Home } from "./home";
import { AddTask } from "./addTask";
import { SignIn } from "./sigin";


export class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      maptask: [],
      taskId: ''
    }
  }
  
  componentWillMount(){
    this.getAllTask()
  }

  getAllTask = async () =>{
    console.log('All task')
    var url = "https://code-center-express-app.herokuapp.com/all_task"
    var addTaskFetch = await fetch(url,{
         method: "GET",
         headers: {'content-type': 'application/json'},
     })
     var response = await addTaskFetch
     var res = await response.json()

     var allView = res.map(task =>
        (
          <Col sm="6" key={task._id}>
          <CardHeader>{task.taskName}</CardHeader>
            <Card body>
              <CardText>{task.description}</CardText>
              <CardText>Reminder Time: {task.reminderTime}</CardText>
              <CardText>Completion Time: {task.time}</CardText>
              <CardText>
                <input type='checkbox' 
                  value={task.isCompleted} 
                  checked={task.isCompleted} 
                  onChange={(name)=>this.isCompletedUpdate(task._id, name.target.checked )}
                /> Completed
              </CardText>
              <ButtonToolbar >
              <ButtonGroup >
              <Button style={{color:'black'}}
                onClick={()=> this.setState({taskId: task._id})}
              >
              <Link to='/Edit' > Edit </Link>
              </Button>
              <Button  
                onClick={()=> this.deleteTask(task._id)}
              >Delete
              </Button>
              </ButtonGroup>
              </ButtonToolbar>
            </Card>
          </Col>
        )
     )
    // console.log(allView)

     this.setState({maptask : allView})
  }

  isCompletedUpdate = async (taskId, name) => {
    var url = `https://code-center-express-app.herokuapp.com/update/${taskId}`
       var updateTaskFetch = await fetch(url,{
            method: "PATCH",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                isCompleted: name 
            }),
        })
        var response = await updateTaskFetch
        var res = await response.json()
        // console.log(res)
        this.getAllTask()
  }

  deleteTask = async (taskId)=>{
    console.log('Delete task')
    var url = `https://code-center-express-app.herokuapp.com/delete/${taskId}`
    var deleteFetch = await fetch(url,{
         method: "DELETE",
         headers: {'content-type': 'application/json'},
     })
     var response = await deleteFetch
     var res = await response.json()
    //  console.log(res)
     this.getAllTask()
  }
    render() {
        return (
          <Router>
            
            <Switch location={location}>
            
                <Route exact path='/' render= {()=> 
                    <div>
                      <Container>
                        <Home /> 
                      
                        <Row style={{paddingTop: 20}}>
                        {this.state.maptask}
                        </Row>
                      </Container>
                    </div>
                  }
                />

                <Route path='/edit' render={()=>
                  <EditTask 
                    taskId= {this.state.taskId}
                  />
                } />
                
            </Switch>
          </Router>
        )
      }
}