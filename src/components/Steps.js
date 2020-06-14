import React from 'react';

const Steps = (props) => {
    const {steps} = props

    return(
        <>
        {steps ? steps : <p>Steps weren't able to be retrieved</p>}
        </>
    )
}

export default Steps;