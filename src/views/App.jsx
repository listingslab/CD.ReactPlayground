/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from './Navbar';

// Disable lint: This is the root component
// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.arrayOf(React.PropTypes.element),
        ]),
    };

    render() {
        return (
            <app-container>
                <Navbar />
                {this.props.children ? this.props.children : null}
            </app-container>
        );
    }
}

export default connect(state => state)(App);
