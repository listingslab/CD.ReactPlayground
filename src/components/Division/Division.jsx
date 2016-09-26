/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import Collapsible from 'react-collapsible';
import './Division.scss';
import DivisionTable from '../DivisionTable/DivisionTable';

function Division(props: any = {}) {
    const openState = true;
    return (
        <division>
            <Collapsible
                trigger={props.data.divisionName}
                open={openState}
                transitionTime={300}
                classParentString="division"
                easing={'ease-in'}
            >
                <DivisionTable data={props.data.wards} />
            </Collapsible>
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
