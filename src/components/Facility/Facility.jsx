/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './Facility.scss';

import Division from '../Division/Division';

function Facility(props) {
    const divisionsData = props.data.divisions;
    const divisions = [];
    if (divisionsData.length > 0) {
        for (let i = 0; i < divisionsData.length; i++) {
            divisions.push(
                <Division key={i} data={divisionsData[i]} />
            );
        }
    } else {
        divisions.push(
            <div>There are no divisions for this facility</div>
        );
    }

    return (
        <facility>
            <facility-title>
                <h2>{props.data.facilityName}</h2>
            </facility-title>
            {divisions}
        </facility>
    );
}

Facility.propTypes = {
    data: React.PropTypes.shape({
        facilityName: React.PropTypes.string,
        divisions: React.PropTypes.array,
    }),
};

export default Facility;
