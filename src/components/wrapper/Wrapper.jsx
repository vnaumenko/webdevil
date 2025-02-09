import React from 'react';
import classes from './Wrapper.module.scss'

const Wrapper = ({children, props}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default Wrapper;
