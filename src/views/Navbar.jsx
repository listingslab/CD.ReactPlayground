/**
 * Created by Chris.Dorward on 20/09/2016.
 */

import React from 'react';
import { Link } from 'react-router';

export function Navbar() {
    return (
        <header className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
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
                    <li>
                        <Link activeClassName="active" to="/ed">
                            ED Admissions List
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/allocation">
                           Allocation
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
