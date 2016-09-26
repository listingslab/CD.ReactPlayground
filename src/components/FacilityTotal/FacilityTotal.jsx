/* @flow */
/**
 * Created by chris.dorward on 22/09/2016.
 */

import React from 'react';
import './FacilityTotal.scss';

function FacilityTotal(props: any = {}) {
    const totals = {
        available: 0,
        borders: 0,
        open: 0,
        occupied: 0,
        vacant: 0,
        closed: 0,
        EDAdmit: 0,
        TransferIn: 0,
        ConDCToday: 0,
        PotDCToday: 0,
        ConfDCTomorrow: 0,
        PotDCTomorrow: 0,
        TransfersOut: 0,
    };
    const divisions = props.data.divisions;
    for (let i = 0; i < divisions.length; i++) {
        const wards = divisions[i].wards;
        for (let j = 0; j < wards.length; j++) {
            totals.available += wards[j].counts.available;
            totals.borders += wards[j].counts.borders;
            totals.open += wards[j].counts.open;
            totals.occupied += wards[j].counts.occupied;
            totals.vacant += wards[j].counts.vacant;
            totals.closed += wards[j].counts.closed;
            totals.EDAdmit += wards[j].counts.EDAdmit;
            totals.TransferIn += wards[j].counts.TransferIn;
            totals.ConDCToday += wards[j].counts.ConDCToday;
            totals.PotDCToday += wards[j].counts.PotDCToday;
            totals.ConfDCTomorrow += wards[j].counts.ConfDCTomorrow;
            totals.PotDCTomorrow += wards[j].counts.PotDCTomorrow;
            totals.TransfersOut += wards[j].counts.TransfersOut;
        }
    }
    let totalAvailabilityClass = null;
    if (totals.available > 0) {
        totalAvailabilityClass = 'availability';
    }
    return (
        <facility-totals-table>
            <table className="table table-bordered table-condensed">
                <tbody>
                    <tr>
                        <td>Hospital Total</td>
                        <td className={totalAvailabilityClass}>{totals.available}</td>
                        <td>{totals.borders}</td>
                        <td>{totals.open}</td>
                        <td>{totals.occupied}</td>
                        <td>{totals.vacant}</td>
                        <td>{totals.closed}</td>
                        <td>{totals.EDAdmit}</td>
                        <td>{totals.TransferIn}</td>
                        <td>{totals.ConDCToday}</td>
                        <td>{totals.PotDCToday}</td>
                        <td>{totals.ConfDCTomorrow}</td>
                        <td>{totals.PotDCTomorrow}</td>
                        <td>{totals.TransfersOut}</td>
                    </tr>
                </tbody>
            </table>
        </facility-totals-table>
    );
}

FacilityTotal.propTypes = {
    data: React.PropTypes.shape({
        divisions: React.PropTypes.array,
    }),
};

export default FacilityTotal;
