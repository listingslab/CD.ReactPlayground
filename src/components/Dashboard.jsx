/**
 * Created by nicholass on 13/09/2016.
 */

import React from 'react';
import { connect } from 'react-redux';


export class Dashboard extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node,
        ]),
    };

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => state)(Dashboard);
