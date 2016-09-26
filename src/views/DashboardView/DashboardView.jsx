/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import Facility from '../../components/Facility/Facility';

import './DashboardView.scss';

import dashboardData from './dashboardData.js';

export function DashboardView() {
    const facilities = [];
    if (dashboardData.length > 0) {
        for (let i = 0; i < dashboardData.length; i++) {
            facilities.push(
                <Facility key={i} data={dashboardData[i]} />
            );
        }
    } else {
        facilities.push(
            <div key="0">No facilities found</div>
        );
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
