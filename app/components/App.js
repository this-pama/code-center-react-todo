var React = require('react')
var ReactDOM = require('react-dom') 
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { EditTask } from "./editTask";
import { Home } from "./home";
import { AddTask } from "./addTask";


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
          <div key={task._id}>
              <p>Task Name: {task.taskName} </p>
              <p>Task Description: {task.description} </p>
              <p>Reminder Time: {task.reminderTime} min</p>
              <p>Completion Time: {task.time} </p>
              <input type='checkbox' value={task.isCompleted} checked={task.isCompleted} onChange={(name)=>this.isCompletedUpdate(task._id, name.target.checked )}/> Completed <br />
              <button onClick={()=> this.setState({taskId: task._id})}><Link to='/Edit' > Edit </Link></button>
              <button onClick={()=> this.deleteTask(task._id)}>Delete</button>
          </div>
        )
     )
    console.log(allView)

     this.setState({maptask : allView})
  }

  isCompletedUpdate = async (taskId, name) => {
    var url = `https://code-center-express-app.herokuapp.com/update/${taskId}`
       var addTaskFetch = await fetch(url,{
            method: "PATCH",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                isCompleted: name 
            }),
        })
        var response = await addTaskFetch
        var res = await response.json()
        console.log(res)
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
     console.log(res)
     this.getAllTask()
  }
    render() {
        return (
          <Router>
            <Switch location={location}>
            
              <Route exact path='/' render= {()=> 
                  <div>
                    <button ><Link to='/addTask'> Add Task </Link></button> 
                    {this.state.maptask}
                  </div>
                }
              />

              <Route path='/edit' render={()=>
                <EditTask 
                  taskId= {this.state.taskId}
                />
              } />
              <Route path='/addTask' component={AddTask} />
            </Switch>
          </Router>
        )
      }
}