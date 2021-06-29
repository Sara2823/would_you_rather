import {_getQuestions} from '../utils/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addQuestionAnswer(authedUser, questionId, selectedOption) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        selectedOption
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}