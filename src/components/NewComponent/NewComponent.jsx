/* @flow */
/**
 * Created by chris.dorward on 21/09/2016.
 */

import React from 'react';
import './NewComponent.scss';

function NewComponent(props: any = {}) {
    return (
        <newcomponent>
            <h2>{props.data.title}</h2>
        </newcomponent>
    );
}

NewComponent.propTypes = {
    data: React.PropTypes.shape({
        title: React.PropTypes.string,
    }),
};

export default NewComponent;
