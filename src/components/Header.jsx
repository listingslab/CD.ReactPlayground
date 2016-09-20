/**
 * Created by nicholass on 13/09/2016.
 */

import React from 'react';
import { Link } from 'react-router';
import { Clock } from './Clock';

export function Header() {
    return (
        <header className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Miya StaffBoard</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <p className="navbar-text navbar-right">
                        Current Time: <Clock />
                    </p>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {};

export default Header;
