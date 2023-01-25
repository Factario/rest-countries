import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '2px solid black', height: '850px', marginTop: '100px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;