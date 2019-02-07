import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
};

const LoaderContainer = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    display: flex;
    align-items: center;
`

const LinearIndeterminate = props => {
    const { classes, loaded } = props;
    if (!loaded) {
        return (
            <LoaderContainer>
                <div className={classes.root}>
                    <LinearProgress />
                </div>
            </LoaderContainer>
        );
    }
    return null
}

LinearIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);