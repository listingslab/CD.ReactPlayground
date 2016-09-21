/**
 * Created by Chris.Dorward on 21/09/2016.
 */

import React from 'react';
import New from '../../components/NewComponent/NewComponent';

import './DashboardView.scss';

export function DashboardView(props) {
    const data = {
        title: 'View Title',
    };
    return (
        <dashboard>
            <New data={data} />
            <h2>Dashboard View Title</h2>
            <p className="aClass">Dashboard</p>
        </dashboard>
    );
}

DashboardView.propTypes = {

};

export default DashboardView;

