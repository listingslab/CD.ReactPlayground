/* @flow */
/**
 * Created by chris.dorward on 22/09/2016.
 */

import React from 'react';
import './DivisionTable.scss';

function DivisionTable(props) {
    const wardsData = props.data;
    const wards = [];
    if (wardsData.length > 0) {
        for (let i = 0; i < wardsData.length; i++) {
            const d = wardsData[i].counts;
            let availabilityClass = null;
            if (d.available > 0) {
                availabilityClass = 'availability';
            }

            wards.push(
                <tr key={i}>
                    <td>{wardsData[i].wardName}</td>
                    <td className={availabilityClass}>
                        {d.available ? d.available : null}
                    </td>
                    <td>{d.borders ? d.borders : null}</td>
                    <td>{d.open ? d.open : null}</td>
                    <td>{d.occupied ? d.occupied : null}</td>
                    <td>{d.vacant ? d.vacant : null}</td>
                    <td>{d.closed ? d.closed : null}</td>
                    <td>{d.EDAdmit ? d.EDAdmit : null}</td>
                    <td>{d.TransferIn ? d.TransferIn : null}</td>
                    <td>{d.ConDCToday ? d.ConDCToday : null}</td>
                    <td>{d.PotDCToday ? d.PotDCToday : null}</td>
                    <td>{d.ConfDCTomorrow ? d.ConfDCTomorrow : null}</td>
                    <td>{d.PotDCTomorrow ? d.PotDCTomorrow : null}</td>
                    <td>{d.TransfersOut ? d.TransfersOut : null}</td>
                </tr>
            );
        }
    } else {
        wards.push(
            <div key="0">There are no wards for this division</div>
        );
    }

    return (
        <division-table>
            <table className="table table-striped table-bordered table-responsive">
                <thead>
                    <tr>
                        <th>Ward</th>
                        <th>Available</th>
                        <th>Boarders</th>
                        <th>Open</th>
                        <th>Occupied</th>
                        <th>Vacant</th>
                        <th>Closed</th>
                        <th>ED Admit</th>
                        <th>Transfers In</th>
                        <th>Confirmed DC Today</th>
                        <th>Potential DC Today</th>
                        <th>Conf DC Tomorrow</th>
                        <th>Pot DC Tomorrow</th>
                        <th>Transfers Out</th>
                    </tr>
                </thead>
                <tbody>
                    {wards}
                </tbody>
            </table>
        </division-table>
    );
}

DivisionTable.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({

        })
    ),
};

export default DivisionTable;
