import React from 'react'
import Loader from 'react-loader'

const options = {
    height: '50px',
    position: 'relative'
}

const StyledLoader = Component => props => (
    <Loader loaded={props.loaded} options={options}>
        <Component {...props} />
    </Loader>
)

export default StyledLoader;