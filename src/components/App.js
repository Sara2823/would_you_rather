import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Home';
import NewQuestion from './createQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionPollResults from './QuestionPollResults';
import Navbar from './Navbar';
import Login from './Login';
import Logout from './Logout';
import LoadingBar from 'react-redux-loading';
import PageNotFound from './404';
import {handleGetQuestions} from "../actions/questions";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetQuestions());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    {this.props.authenticated == null
                        ? null
                        : <Navbar authedUser={this.props.authedUser}/>
                    }
                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/question/:id'
                                           component={connect(mapStateToProps)(QuestionPoll)}
                                    />
                                    <Route path='/results/:id/'
                                            component={connect(mapStateToProps)(QuestionPollResults)}
                                    />
                                                    
                                    <Route path='/add'  
                                            component={NewQuestion}
                                    />
                                    <Route path="/" exact component={withRouter(Login)}/>
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
        authedUser: login.authedUser,
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(App);
