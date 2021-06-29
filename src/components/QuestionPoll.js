import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestionAnswer} from '../actions/shared';
import {Redirect} from "react-router-dom";
import PageNotFound from "./404";

class QuestionPoll extends Component {

    state = {
        optionSelected: '',
        answerSubmitted: false
    };

    handleSubmit(e, questionId) {
        e.preventDefault();
        const {dispatch} = this.props;
        const {optionSelected} = this.state;
        dispatch(handleAddQuestionAnswer(questionId, optionSelected));

        this.setState(() => ({
            optionSelected: '',
            answerSubmitted: true
        }));
    }

    handleInputChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            optionSelected: text
        }));
    };

    render() {
        const {optionSelected, answerSubmitted} = this.state;
        const {id, question, author, pageNotFound} = this.props;

        if (pageNotFound === true) {
            return <PageNotFound/>;
        }

        if (answerSubmitted === true) {
            return <Redirect to="/home"/>;
        }

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='card'>
                                    <div className='card-header bold'>would you rather...</div>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row justify-content-center'>
                
                                                <div className='col-sm-8'>
                                                    <div className='question-info'>
                                                        <form onSubmit={(e) => this.handleSubmit(e, id)}>
                                                            <div className="form-check">
                                                                <input className="form-check-input"
                                                                       type="radio"
                                                                       name="questionPoll"
                                                                       id="optionOne"
                                                                       value="optionOne"
                                                                       onChange={this.handleInputChange}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="optionOne">
                                                                    {question.optionOne.text}
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input"
                                                                       type="radio"
                                                                       name="questionPoll"
                                                                       id="optionTwo"
                                                                       value="optionTwo"
                                                                       onChange={this.handleInputChange}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="exampleRadios2">
                                                                    {question.optionTwo.text}
                                                                </label>
                                                            </div>
                                                            <button
                                                                className='btn btn-success m-15-top'
                                                                type='submit'
                                                                disabled={optionSelected === ''}
                                                            >
                                                                Submit
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({login, questions, users, match}, props) {
    const {id} = props.match.params;

    var pageNotFound = true;
    var author = "";
    var question = "";

    if (questions[id] !== undefined) {
        pageNotFound = false;
        question = questions[id];
        author = users[question['author']];
    }

    return {
        id,
        question: question,
        author: author,
        authedUser: login.authedUser.id,
        pageNotFound: pageNotFound
    }
}

export default connect(mapStateToProps)(QuestionPoll);