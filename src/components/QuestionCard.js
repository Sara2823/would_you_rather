import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatQuestion} from "../utils/helpers";
import {Link} from 'react-router-dom';

class Question extends Component{
    render(){
    const {question} = this.props;

    if (question === null) {
        return <p>This question doesn't exist.</p>
    }

    const {name, id, avatar, optionOne, optionTwo, answered} = question;

    if (this.props.displyQuestions === 'answered' && answered !== true) {
        return false;
    } else if (this.props.displyQuestions === 'unanswered' && answered === true) {
        return false;
    }

    var path = '';

    if (this.props.displyQuestions === 'answered') {
        path = `results/${id}`;
    } else if (this.props.displyQuestions === 'unanswered') {
        path = `/question/${id}`;
    }

    return (
        <div className='margin-top-10'>
            <div className='card'>
                <div className='card-body'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-4 border-right center'>
                                <img src={avatar} alt={`Avatar of ${name}`} className='avatar'/>
                                <p>{name}</p>
                            </div>
                            <div className='col-sm-4'>
                                <div className='question-info'>
                                    <p className='center'>{optionOne.text} <strong>X</strong> {optionTwo.text}</p>
                                    <Link to={path} className='center'>
                                        <button className='btn btn-outline-info'>View</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
};
}


function mapStateToProps({login, users, questions}, {id, displyQuestions}) {
    const question = questions[id];

    return {
        authedUser: login.authedUser.id,
        question: formatQuestion(question, users[question.author], login.authedUser.id),
        displyQuestions
    }
}

export default connect(mapStateToProps)(Question);