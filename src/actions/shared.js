import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { addUserQuestion, addUserQuestionAnswer } from './users';
import { addQuestion, addQuestionAnswer} from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleAddQuestionAnswer (qId, selectedOption) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        const {login} = getState()
        const authedUser = login.authedUser.id;

        _saveQuestionAnswer({
            authedUser,
            qid: qId,
            answer: selectedOption
        }).then(() => {
            dispatch(addQuestionAnswer(authedUser, qId, selectedOption));
            dispatch(addUserQuestionAnswer(authedUser, qId, selectedOption));
            dispatch(hideLoading());
        });
    }
}

export function handleAddQuestion (optionOneText, optionTwoText, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());

        const {login} = getState();
        const author = login.authedUser.id;

        _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then((question) => {
            dispatch(addUserQuestion(question));
            dispatch(addQuestion(question));
            dispatch(showLoading());
        }).then(callback);
    }
}