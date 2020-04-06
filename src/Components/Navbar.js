import React from 'react';
import {Link} from "react-router-dom";

function Navbar () {
    return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="/logo.png"  /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/school">School <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teacher">Teacher</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">Student</Link>
                            </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <Link className="nav-link">Login</Link>
                                <Link className="nav-link">Register</Link>
                            </div>
                        </div>
                    </div>
                </nav> 

                {/* <Switch>
                    <Route exact path="school"><School /></Route>
                    <Route path="teacher"><Teacher /></Route>
                    <Route path="student"><Student /></Route>
                </Switch> */}
            </>
        )
    }

export default Navbar