/**
 * Created by nicholass on 13/09/2016.
 */

import React from 'react';
import moment from 'moment';


export class Clock extends React.Component {
    static propTypes = {
        format: React.PropTypes.string,
    };

    static defaultProps = {
        format: 'HH:mm',
    };

    state = {
        time: null,
    };

    componentWillMount() {
        this.shouldUpdate = true;
        this.animate();
    }

    componentWillUnmount() {
        this.shouldUpdate = false;
    }

    shouldUpdate = false;

    animate = () => {
        this.setState({ time: moment(Date.now()).format(this.props.format) });

        window.requestAnimationFrame(this.animate);
    };

    render() {
        return <span>{this.state.time}</span>;
    }
}

export default Clock;
