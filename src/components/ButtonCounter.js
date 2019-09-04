import React from 'react';

function ButtonCounter(props) {

    const internalClick = () => {
        props.incrementCounterFunction(props.increment);
    };

    return (
        <button onClick={internalClick}>+{props.increment}</button>
    );
};

export default ButtonCounter;