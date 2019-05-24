var React = require('react')
var ReactDOM = require('react-dom') 

export class App extends React.Component{
    render() {
        return (
          <div>
            <p>Task Name: </p>
            <p>Task Description: </p>
            <p>Reminder Time: </p>
            <p>Completion Time: </p>
            <input type='checkbox' /> Completed
          </div>
        );
      }
}