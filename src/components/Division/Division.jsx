/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './Division.scss';

function Division(props) {
    return (
        <division>
            <h2>{props.data.title}</h2>
        </division>
    );
}

Division.propTypes = {
    data: React.PropTypes.shape({
        title: React.PropTypes.string,
    }),
};

export default Division;
