/* @flow */
/**
 * Created by chris.dorward on 22/09/2016.
 */

import React from 'react';
import './DivisionTable.scss';

function DivisionTable(props: any = {}) {
    const wardsData = props.data;
    const wards = [];
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

    if (wardsData.length > 0) {
        for (let i = 0; i < wardsData.length; i++) {
            const d = wardsData[i].counts;
            let availabilityClass = null;
            if (d.available > 0) {
                availabilityClass = 'availability';
            }
            totals.available += d.available;
            totals.borders += d.borders;
            totals.open += d.open;
            totals.occupied += d.occupied;
            totals.vacant += d.vacant;
            totals.closed += d.closed;
            totals.EDAdmit += d.EDAdmit;
            totals.TransferIn += d.TransferIn;
            totals.ConDCToday += d.ConDCToday;
            totals.PotDCToday += d.PotDCToday;
            totals.ConfDCTomorrow += d.ConfDCTomorrow;
            totals.PotDCTomorrow += d.PotDCTomorrow;
            totals.TransfersOut += d.TransfersOut;
            wards.push(
                <tr key={i}>
                    <td>{wardsData[i].wardName}</td>
                    <td className={availabilityClass}>
                        {d.available != null ? d.available : null}
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
            <tr key="0">
                <td colSpan="14">There are no wards for this division</td>
            </tr>
        );
    }
    let totalAvailabilityClass = null;
    if (totals.available > 0) {
        totalAvailabilityClass = 'availability';
    }
    wards.push(
        <tr key="totals" className="totals">
            <td>Division Total</td>
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
    );
    return (
        <division-table>
            <table className="table table-hover table-striped table-bordered table-condensed">
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
