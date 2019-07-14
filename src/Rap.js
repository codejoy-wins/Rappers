import React from 'react';

function Rap(props){
    return (
        <div>
            <h1>{props.magic.song} by {props.magic.name}</h1>
            <p>{props.magic.desc}</p>
        </div>
    )
}

export default Rap;