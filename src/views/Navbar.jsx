/**
 * Created by Chris.Dorward on 20/09/2016.
 */

import React from 'react';
import { Link } from 'react-router';

export function Navbar(props) {
    const pathName = props.location.pathname;

    return (
        <header className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className={pathName === '/dashboard' ? 'active' : null}>
                        <Link className="navbar-brand active" to="/dashboard">
                            <span className="">Dashboard</span>
                        </Link>
                    </li>
                    <li className={pathName === '/ward' ? 'active' : null}>
                        <Link className="navbar-brand" to="/ward">
                            <span className="">Ward View</span>
                        </Link>
                    </li>
                    <li className={pathName === '/ed' ? 'active' : null}>
                        <Link className="navbar-brand" to="/ed">
                            <span className="">ED Admissions List</span>
                        </Link>
                    </li>
                    <li className={pathName === '/allocation' ? 'active' : null}>
                        <Link className="navbar-brand" to="/allocation">
                            <span className="">Allocation</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

Navbar.propTypes = {};

export default Navbar;
