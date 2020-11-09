import React from 'react';
import './Title.scss'

import Typography from '@material-ui/core/Typography';

function Title(props) {
    return (
        <Typography className='Title' component="h1" variant="h5" gutterBottom>
            {props.children}
        </Typography>
    );
}

export default Title