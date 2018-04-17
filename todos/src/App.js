import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { todoReducer } from './reducers';
import { submitTodo } from './actions';

class App extends Component {
  render() {
    let name = {
      value: 'Default',
      completed: false
    }
    return (
      <div className="ToDoList">
      <input type="text" placeholder='Add your To Dos here!'></input>
      <button>Submit</button>
      </div>
      // <div>
      //   Add Task list here
      // </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(this, state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = () => {
  return {
    submitTodo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
