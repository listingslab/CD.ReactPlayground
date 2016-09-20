import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';

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
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => state)(App);
