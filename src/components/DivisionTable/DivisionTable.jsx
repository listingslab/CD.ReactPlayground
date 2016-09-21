/* @flow */
/**
 * Created by chris.dorward on 22/09/2016.
 */

import React from 'react';
import './DivisionTable.scss';

function DivisionTable(props) {
    return (
        <newcomponent>
            <h2>{props.data.title}</h2>
        </newcomponent>
    );
}

DivisionTable.propTypes = {
    data: React.PropTypes.shape({
        title: React.PropTypes.string,
    }),
};

export default DivisionTable;
