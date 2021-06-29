import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  
  render() {
    console.log("===============", this.props)
    return (
      <div>
        {!this.props.answered &&
          <div className="question">
          <div>{this.props.author.name}</div>
         <p className="option"> {this.props.question.optionOne.text}</p> 
         <p className="option"> {this.props.question.optionTwo.text}</p> 
         </div>
         }
        
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const author = users[question.author]
  const answered = question.optionOne.votes.includes(authedUser) |question.optionTwo.votes.includes(authedUser) ? true: false

  return {
    authedUser,
    question : question
      ? question
      : null,
    answered,
    author,
  }
}

export default connect(mapStateToProps)(Question)