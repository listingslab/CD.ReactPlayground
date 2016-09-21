/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import Facility from '../../components/Facility/Facility';

import './DashboardView.scss';
import DashboardData from './DashboardData.js';

export function DashboardView() {
    // console.log(DashboardData);
    const facilities = [];

    if (DashboardData.length > 0) {
        for (let i = 0; i < DashboardData.length; i++) {
            facilities.push(<Facility key={i} data={DashboardData[i]} />);
        }
    } else {
        facilities.push(<div className="row-container">
            <div>There are no facilities</div>
        </div>);
    }

    return (
        <dashboard>
            {facilities}
        </dashboard>
    );
}

DashboardView.propTypes = {
};

export default DashboardView;

