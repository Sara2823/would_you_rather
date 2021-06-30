import React from 'react';
import {connect} from 'react-redux';
import {formatQuestion} from "../utils/helpers";
import {Link} from 'react-router-dom';

const Question = (props) => {
    const {question} = props;

    if (question === null) {
        return <p>This question doesn't exist.</p>
    }

    const {name, id, avatar, optionOne, optionTwo, answered} = question;

    if (props.questionsToShow === 'answered' && answered !== true) {
        return false;
    } else if (props.questionsToShow === 'unanswered' && answered === true) {
        return false;
    }

    let viewPollLink = '';

    if (props.questionsToShow === 'answered') {
        viewPollLink = `/question/${id}/results`;
    } else if (props.questionsToShow === 'unanswered') {
        viewPollLink = `/question/${id}`;
    }

    return (
        <div className='margin-top-10'>
            <div className='card'>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-4 border-right center'>
                                <p></p>
                                <img src={avatar} alt={`Avatar of ${name}`} className='avatar'/>
                                <p>{name}</p>
                            </div>
                            <div className='col-sm-8'>
                                <div className='question-info'>
                                    <p className='center'>{optionOne.text} <strong>X</strong> {optionTwo.text}</p>
                                    <Link to={viewPollLink} className='center'>
                                        <button
                                            className='btn btn-outline-primary reset-vertical-margin '>
                                            View Poll
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


function mapStateToProps({login, users, questions}, {id, questionsToShow}) {
    const question = questions[id];

    return {
        authedUser: login.authedUser.id,
        question: formatQuestion(question, users[question.author], login.authedUser.id),
        questionsToShow
    }
}

export default connect(mapStateToProps)(Question);