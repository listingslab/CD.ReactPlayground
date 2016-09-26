/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */
const capitalisedWords = [
    'Lorem ipsum',
    'Dolor Sit',
    'Amet',
    'Consectetur',
    'Adipiscing Elit',
    'Nullam Mollis',
    'Quam Id Lorem',
    'Feugiat',
    'At Maximus',
    'Nisl Pellentesque',
    'In hac habitasse',
    'Platea dictumst',
    'Praesent sit amet',
    'Vulputate purus',
];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
function ranNumber(min, max) {
    // eslint-disable-next-line no-mixed-operators
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newFacilityName() {
    return `${capitalisedWords[ranNumber(0, capitalisedWords.length - 1)]} Hospital`;
}
function newDivisionName() {
    return `${capitalisedWords[ranNumber(0, capitalisedWords.length - 1)]} Division`;
}
function getUppercaseChar() {
    return `${alphabet[ranNumber(0, alphabet.length - 1)]}`;
}
function newWardName() {
    return `F${getUppercaseChar().toUpperCase() + getUppercaseChar().toUpperCase()}`;
}
function createFacility(numDivisions) {
    const newFacility = {};
    newFacility.facilityName = newFacilityName();
    newFacility.divisions = [];
    for (let i = 0; i < numDivisions; i++) {
        const newDivision = {};
        newDivision.divisionName = newDivisionName();
        newDivision.wards = [];
        for (let j = 0; j < ranNumber(1, 5); j++) {
            const newWard = {};
            newWard.wardName = newWardName();
            newWard.counts = {
                available: ranNumber(0, 3),
                borders: ranNumber(3, 7),
                open: ranNumber(5, 9),
                occupied: ranNumber(5, 9),
                vacant: ranNumber(5, 9),
                closed: null,
                EDAdmit: ranNumber(1, 4),
                TransferIn: null,
                ConDCToday: null,
                PotDCToday: null,
                ConfDCTomorrow: null,
                PotDCTomorrow: null,
                TransfersOut: null,
            };
            newDivision.wards.push(newWard);
        }
        newFacility.divisions.push(newDivision);
    }
    return newFacility;
}
const dashboardData = [];
dashboardData.push(createFacility(2));
dashboardData.push(createFacility(1));
export default dashboardData;
