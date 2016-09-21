/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import New from '../../components/NewComponent/NewComponent';

import './DashboardView.scss';
import DashboardData from './DashboardData.js';

export function DashboardView() {

    // console.log(DashboardData);
    const data = {
        title: 'View Title',
    };
    return (
        <dashboard>
            <New data={data} />
        </dashboard>
    );
}

DashboardView.propTypes = {
};

export default DashboardView;

