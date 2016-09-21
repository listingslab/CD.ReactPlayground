/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './Facility.scss';

function Facility(props) {
    return (
        <facility>
            <h2>{props.data.facilityName}</h2>
        </facility>
    );
}

Facility.propTypes = {
    data: React.PropTypes.shape({
        facilityName: React.PropTypes.string,
    }),
};

export default Facility;
