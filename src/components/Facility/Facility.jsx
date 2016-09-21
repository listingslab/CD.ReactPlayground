/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './Facility.scss';

function Facility() {
    return (
        <facility>
            <h2>a facility</h2>
        </facility>
    );
}

Facility.propTypes = {
    data: React.PropTypes.shape({
        title: React.PropTypes.string,
    }),
};

export default Facility;
