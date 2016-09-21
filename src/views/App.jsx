import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from './Navbar';

export class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node,
        ]),
    };

    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => state)(App);
