import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './QuestionCard';

class Home extends Component {

    state = {
        'displyQuestions': 'unanswered',
    };

    handleTabChange = (e, tab) => {
        this.setState(() => ({
            displyQuestions: tab,
        }));
    };

    render() {
        const {displyQuestions,} = this.state;

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='center'>
                                    <button type='button'
                                            className="btn btn-info "
                                            onClick={(e) => this.handleTabChange(e, 'unanswered')}>Unanswered
                                        Questions
                                    </button>
                                    <button type='button'
                                            className="btn btn-info "
                                            onClick={(e) => this.handleTabChange(e, 'answered')}>Answered
                                        Questions
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                {this.props.questionIds.map((id) => {
                                    return (
                                        <Question key={id} id={id}
                                                  displyQuestions={displyQuestions}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home);