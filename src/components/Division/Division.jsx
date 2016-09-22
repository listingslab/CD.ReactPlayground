/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './Division.scss';
import DivisionTable from '../DivisionTable/DivisionTable';

function Division(props) {
    return (
        <division>
            <division-title>
                <h3>{props.data.divisionName}</h3>
                <DivisionTable data={props.data.wards} />
            </division-title>
        </division>
    );
}

Division.propTypes = {
    data: React.PropTypes.shape({
        divisionName: React.PropTypes.string,
        wards: React.PropTypes.array,
    }),
};

export default Division;
