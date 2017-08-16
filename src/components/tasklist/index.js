import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/';

class TaskList extends React.Component{
  render() {
    return (
      <table>
        <tr>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((task, index)=> <Task key={index} task={task} />)}
          </tbody>
        </tr>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks:state.tasks
  }
}

export default connect(mapStateToProps)(TaskList);
