/**
 * Created by Chris.Dorward on 20/09/2016.
 */

import React from 'react';
import ViewContainer from '../../components/ViewContainer/ViewContainer';

export function DashboardView() {
    return (
            <ViewContainer>
                <h1>View Title</h1>
                <dashboard>
                    dashboard
                </dashboard>
            </ViewContainer>

    );
}

DashboardView.propTypes = {};

export default DashboardView;
