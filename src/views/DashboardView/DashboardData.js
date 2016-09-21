/**
 * Created by chris.dorward on 21/09/2016.
 */

const jsonData =
    [{
        'facilityName': 'Sunshine Hospital',
        'divisions': [{
            'divisionName': 'Emergency, Medicine and Cancer Services',
            'wards': [{
                'wardName': 'S3E',
                'counts': {
                    'available': 3,
                    'borders': 5,
                    'open': 7,
                    'occupied': 9,
                    'vacant': 8,
                    'TransferIn': 2,
                },
            },
                {
                    'wardName': 'S1E',
                    'counts': {},
                }],
        },
            {
                'divisionName': 'Womans & Childrens',
                'wards': [{
                    'wardName': 'SMATH',
                    'counts': {
                        'available': 3,
                        'borders': 5,
                        'open': 7,
                        'occupied': 9,
                    },
                }],
            }],
    },{
        'facilityName': 'Footscray Hospital',
        'divisions': [{
            'divisionName': 'Emergency, Medicine and Cancer Services',
            'wards': [{
                'wardName': 'S3E',
                'counts': {
                    'available': 3,
                    'borders': 5,
                    'open': 7,
                    'occupied': 9,
                    'vacant': 8,
                    'TransferIn': 2,
                },
            },
                {
                    'wardName': 'S1E',
                    'counts': {},
                }],
        },
            {
                'divisionName': 'Womans & Childrens',
                'wards': [{
                    'wardName': 'SMATH',
                    'counts': {
                        'available': 3,
                        'borders': 5,
                        'open': 7,
                        'occupied': 9,
                    },
                }],
            }],
    }
    ];

export default jsonData;

