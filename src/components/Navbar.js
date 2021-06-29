import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = (authedUser) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className='projectContainer'>
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav">
                            <NavLink to='/' exact activeClassName='active'
                                     className="nav-item nav-link">Home</NavLink>
                            <NavLink to='/add' exact activeClassName='active'
                                     className="nav-item nav-link">Create Question</NavLink>
                            <Link to="/logout"><button
                            className="btn btn-outline-danger">Logout</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;