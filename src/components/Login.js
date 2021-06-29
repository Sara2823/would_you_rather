import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetUsers} from '../actions/users';
import {handleLoginUser} from '../actions/authedUser';
import LoadingBar from "react-redux-loading";

class Login extends Component {
    state = {
        authedUser: ''
    };

    componentDidMount() {
        this.props.dispatch(handleGetUsers());
    }

    handleChange = (e) => {
        const authedUser = e.target.value;
        this.setState(() => ({
            authedUser
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(handleLoginUser(this.state.authedUser));
    };

    render() {
        if (this.props.loading === true || !this.props.users) {
            return <div/>;
        }

        if (this.props.isAuthed) {
            return <Redirect to="/home"/>;
        }

        return (
            <div>
                <LoadingBar />
                <div className="container">

                    <h1 className="form-heading">Login Form</h1>
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Login</h2>
                            </div>
                            <form id="Login" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <select className="form-control" id="id"
                                            onChange={(e) => this.handleChange(e)}>
                                        <option>Select User</option>
                                        {
                                            Object.keys(this.props.users).map((user) => {
                                                return <option key={this.props.users[user].id}
                                                               value={this.props.users[user].id}>{this.props.users[user].name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success" disabled={this.state.authedUser === ''}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({users, login}) {
    return {
        loading: users === null,
        users,
        isAuthed: login.authenticated
    }
}

export default connect(mapStateToProps)(Login);