/**
 * Created by Chris.Dorward on 20/09/2016.
 */

import React from 'react';
import { Link } from 'react-router';
import logo from 'assets/images/miya-logo.png';

export function Navbar() {
    return (
        <header className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">

                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img alt="Miya" src={logo} />
                    </Link>
                </div>

                <ul className="nav navbar-nav">
                    <li>
                        <Link activeClassName="active" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/ward">
                            Ward View
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

Navbar.propTypes = {

};

export default Navbar;
