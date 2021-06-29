import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './question'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ul className='dashboard-list'>
          <h2>Questions</h2>
          {this.props.QIds.map((id) => (
            <li key={id} style={{ listStyleType: "none" }}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    QIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)