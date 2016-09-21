/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from './Navbar';

export class App extends React.Component {
    static propTypes = {
    };

    render() {
        return (
            <app>
                <Navbar />
            </app>

        );
    }
}

export default connect(state => state)(App);
