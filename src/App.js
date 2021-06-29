import './App.css';
import Login from './components/login';
import Question from './components/question'
import Dashboard from './components/dashboard';
import React, {Component} from 'react'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    )
  }  
}

export default connect()(App)