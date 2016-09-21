/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import NewComponent from '../../components/NewComponent/NewComponent';

import './DashboardView.scss';

export function DashboardView() {
    return (

        <dashboard>
            <NewComponent></NewComponent>
            <h2>Dashboard View Title</h2>
            <p className="aClass">Dashboard</p>
        </dashboard>
    );
}


DashboardView.propTypes = {};

export default DashboardView;

