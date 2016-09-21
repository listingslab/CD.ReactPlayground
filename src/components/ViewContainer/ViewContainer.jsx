/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import styles from './ViewContainer.scss';

export class ViewContainer extends React.Component {
    static propTypes = {

    };

    render() {
        console.log(styles.ViewContainer);
        return (
            <v className={ styles.ViewContainer }>ViewContainer</v>
        );
    }
}

export default ViewContainer;
