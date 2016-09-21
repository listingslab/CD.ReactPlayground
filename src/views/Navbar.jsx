/**
 * Created by Chris.Dorward on 20/09/2016.
 */

import React from 'react';
import { Link } from 'react-router';

export function Navbar() {
    return (
        <header className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">React Playground</Link>
                </div>
            </div>
        </header>
    );
}

Navbar.propTypes = {};

export default Navbar;
