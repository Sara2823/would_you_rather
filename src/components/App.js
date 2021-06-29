import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionPollResults from './QuestionPollResults';
import Navbar from './Navbar';
import Login from './Login';
import Logout from './Logout';
import ProtectedRoute from './ProtectedRoute';
import LoadingBar from 'react-redux-loading';
import PageNotFound from './404';
import {handleGetQuestions} from "../actions/questions";


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    {this.props.authenticated == null
                        ? null
                        : <Navbar loggedInUser={this.props.loggedInUser}/>
                    }
                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <ProtectedRoute path='/' exact component={Dashboard}
                                                    isAuthenticated={this.props.authenticated}/>
                                    <ProtectedRoute path='/question/:id' exact component={connect(mapStateToProps)(QuestionPoll)}
                                                    isAuthenticated={this.props.authenticated}/>
                                    <ProtectedRoute path='/question/:id/results'
                                                    exact component={connect(mapStateToProps)(QuestionPollResults)}
                                                    isAuthenticated={this.props.authenticated}/>
                                    <ProtectedRoute path='/add' exact component={NewQuestion}
                                                    isAuthenticated={this.props.authenticated}/>
                                    <ProtectedRoute path='/leaderboard' exact component={Leaderboard}
                                                    isAuthenticated={this.props.authenticated}/>
                                    <Route path="/login" component={withRouter(Login)}/>
                                    <Route path="/logout" exact component={withRouter(Logout)}/>
                                    <Route component={PageNotFound} />
                                </Switch>
                            </div>
                        }

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({users, login}) {
    return {
        loading: false,
        loggedInUser: login.authedUser,
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps,  handleGetQuestions )(App)
