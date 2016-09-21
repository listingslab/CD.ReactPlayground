/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from './Navbar';

export class App extends React.Component {
    static propTypes = {};

    render() {
        return (
            <app-container>
                <Navbar {...this.props}/>
                {this.props.children ? this.props.children : <Link to="/dashboard">Dashboard</Link>}
            </app-container>

        );
    }
}

export default connect(state => state)(App);
