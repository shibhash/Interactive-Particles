import React from 'react';

function HeaderBlock(props) {
        return ( 
            <div className = {props.className}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <br />
            </div>
        );
}

export default HeaderBlock;
