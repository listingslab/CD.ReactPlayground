/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import Collapsible from 'react-collapsible';
import Division from '../Division/Division';

import './Facility.scss';
import FacilityTotal from '../FacilityTotal/FacilityTotal';

function Facility(props: any = {}) {
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
            <div key="0">There are no divisions for this facility</div>
        );
    }
    const openState = true;
    return (
        <facility>
            <Collapsible
                trigger={props.data.facilityName}
                open={openState}
                transitionTime={300}
                classParentString="facility"
                easing={'ease-in'}
            >
                {divisions}
                <FacilityTotal data={props.data} />
            </Collapsible>
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
