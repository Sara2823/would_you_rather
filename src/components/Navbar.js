import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className='projectContainer'>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <NavLink to='/' exact activeClassName='active'
                                     className="nav-item nav-link">Home</NavLink>
                            <NavLink to='/add' exact activeClassName='active'
                                     className="nav-item nav-link">New Question</NavLink>
                            <NavLink to='/leaderboard' exact activeClassName='active'
                                     className="nav-item nav-link">Leader Board</NavLink>
                        </ul>
                        <span className="navbar-nav"><Link to="/logout"><button
                            className="btn-sm btn-outline-danger">Logout</button></Link></span>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;