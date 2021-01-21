import React  from 'react';

export default function Button(props) {
    return(
        <div>
    <button onClick={props.getDataBtn}>Get picture of the day</button>
    </div>
    )
};


